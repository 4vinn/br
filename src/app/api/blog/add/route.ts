import prismadb from "@/lib/prismadb";
import { AddBlogSchema } from "@/types/blogAddType";
import { generateUniqueSlug } from "@/utils/generateSlug";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const res = await req.json();
        const reqBody = AddBlogSchema.safeParse(res);
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

        const TokenData = JSON.parse(req.cookies.get("TokenData")?.value!);
        const admin_id = TokenData.id;

        const title = reqBody.data.title;
        const tor = reqBody.data.time_of_reading;
        const tags = reqBody.data.tags;
        const author = reqBody.data.author;
        const is_report = reqBody.data.is_report;
        const thumbnail_image = reqBody.data.thumbnail;
        const content = reqBody.data.content;


        //checking if the same blog exists or not
        const existingEntry = await prismadb.blog.findFirst({
            where: {
                OR: [
                    { title: title },
                    { content: content }
                ]
            }
        });
        if (existingEntry) {
            return Response.json({
                code: 2,
                message: "A blog/report with same title/content is already present"
            })
        }

        //checking if the image exists or not and if not then creating a new entry 
        let imageData = await prismadb.image.findFirst({
            where: {
                data: thumbnail_image
            }
        })

        if (!imageData) {
            imageData = await prismadb.image.create({
                data: {
                    data: thumbnail_image
                }
            })
        }

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

        //fetching tag details
        let tagDetails = await prismadb.tag.findMany({
            where: {
                name: {
                    in: tags
                }
            }
        })


        const uniqueSlug = await generateUniqueSlug(title);

        await prismadb.blog.create({
            data: {
                author: author,
                content: content,
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
            error: { ...error }
        })
    }
}