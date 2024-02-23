import prismadb from "@/lib/prismadb";
import { AddBlogSchema } from "@/types/blogAddType";
import { generateUniqueSlug } from "@/utils/generateSlug";
import { uploadR2 } from "@/utils/uploadCloudFlare";
import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const res = await req.formData();
        const toParse = {
            title: res.get('title'),
            time_of_reading: res.get('tor'),
            tags: res.get('tags')?.toString().split(','),
            author: res.get('author'),
            is_report: false
        }
        const reqBody = AddBlogSchema.safeParse(toParse);
        if (!reqBody.success) {
            return Response.json(
                {
                    code: 1,
                    error: reqBody.error.issues,
                    message: "Enter all required fields",
                },
                { status: 400 }
            );
        }

        // const TokenData = JSON.parse(req.cookies.get("TokenData")?.value!);
        const admin_id = 2;

        const title = reqBody.data.title;
        const tor = reqBody.data.time_of_reading;
        let tags = reqBody.data.tags;
        const author = reqBody.data.author;
        const is_report = reqBody.data.is_report;

        if (tags.length === 0) {
            const newArray = [];
            newArray.push(res.get('tags')!.toString());
            tags = newArray;
        }


        //checking if the same blog exists or not
        const existingEntry = await prismadb.blog.findFirst({
            where: {
                OR: [
                    { title: title },
                ]
            }
        });
        if (existingEntry) {
            return Response.json({
                code: 2,
                message: "A blog/report with same title is already present"
            })
        }

        //uploding the image on cloudflare
        const data: any = res.get('file');
        const fileBuffer = await data.arrayBuffer();
        const fileName = `${title}_image`;
        let url = `https://pub-41a1a8f32abe4401b1f15c19faba731c.r2.dev/${fileName}`;
        const imageUploadResponse = await uploadR2(fileBuffer, fileName);
        if (!imageUploadResponse) {
            return Response.json({
                code: 2,
                message: "Error in image uploading",
            })
        }

        const imageData = await prismadb.image.create({
            data: {
                data: url
            }
        })

        //uploading the content on cloudflare
        const blogContent: any = res.get('content');
        const fileNameContent = `${title}_content`;
        let ContentUrl = `https://pub-41a1a8f32abe4401b1f15c19faba731c.r2.dev/${fileNameContent}`;
        const ContentUploadResponse = await uploadR2(blogContent, fileNameContent);

        if (!ContentUploadResponse) {
            return Response.json({
                code: 2,
                message: "Error in content uploading",
            })
        }

        console.log("uploads done");

        //fetching the admin details who is posting the blog/report
        const admin = await prismadb.admin.findUnique({
            where: {
                id: admin_id
            }
        })

        if (!admin) {
            return Response.json({
                code: 2,
                message: "Admin not found"
            })
        }

        console.log("admin part done");

        //fetching tag details
        let tagDetails = await prismadb.tag.findMany({
            where: {
                name: {
                    in: tags
                }
            }
        })

        console.log("tag part done");
        const uniqueSlug = await generateUniqueSlug(title);

        await prismadb.blog.create({
            data: {
                author: author,
                content: ContentUrl,
                published: new Date(),
                slug: uniqueSlug,
                title: title,
                tor: tor,
                is_report: is_report,
                admin_id: admin_id,
                image_id: imageData.id,
                tags: {
                    connect: tagDetails.map(tag => ({ id: tag.id }))
                },
            }
        })
        return Response.json({
            code: 0,
            message: "blog posted successfully"
        })

    } catch (error: any) {
        return Response.json({
            code: -1,
            message: "Internal Server Error",
            error: error.message
        })
    }
}