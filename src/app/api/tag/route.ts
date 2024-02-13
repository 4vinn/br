import prismadb from "@/lib/prismadb";
import { TagSchema } from "@/types/tagType";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const tags = await prismadb.tag.findMany({
            select: {
                name: true,
            }
        });
        return Response.json({
            code: 0,
            message: "Successfully Fetched all the tags",
            data: tags
        })
    } catch (error: any) {
        return Response.json({
            code: -1,
            message: "Internal Server Error",
            error: { ...error }
        })
    }
}

export async function POST(req: NextRequest) {
    try {
        const res = await req.json();
        const reqBody = TagSchema.safeParse(res);
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
        const tagNames = reqBody.data.tag_names;

        const checkTag = await prismadb.tag.findMany({
            where: {
                name: {
                    in: tagNames
                }
            }
        })

        const existingTags = checkTag.map(tag => tag.name);
        const newTags = tagNames.filter(tagName => !existingTags.includes(tagName));

        const params = newTags.map((names) => {
            return {
                name: names
            }
        })

        await prismadb.tag.createMany({
            data: params
        })

        return Response.json({
            code: 0,
            message: "Tag Added Successfully"
        })
    } catch (error: any) {
        return Response.json({
            code: -1,
            message: "Internal Server Error",
            error: { ...error }
        })
    }
}


export async function DELETE(req: NextRequest) {
    try {
        const res = await req.json();
        const reqBody = TagSchema.safeParse(res);
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
        const tagNames = reqBody.data.tag_names;

        const checkTag = await prismadb.tag.findMany({
            where: {
                name: {
                    in: tagNames
                }
            }
        })

        const existingTags = checkTag.map(tag => tag.name);
        const newTags = tagNames.filter(tagName => !existingTags.includes(tagName));


        if(checkTag.length !== tagNames.length){
            return Response.json({
                code : 1,
                message : "Tag/s mentioned are not present in the mentioned",
                data : newTags
            })
        }

        await prismadb.tag.deleteMany({
            where : {
                name : {
                    in : existingTags
                }
            }
        })

        return Response.json({
            code : 0,
            message : "Tags Deleted Successfully"
        })

    } catch (error: any) {
        return Response.json({
            code: -1,
            message: "Internal Server Error",
            error: { ...error }
        })
    }
}