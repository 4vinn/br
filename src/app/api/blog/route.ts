import prismadb from "@/lib/prismadb";
import { FetchParamSchema } from "@/types/blogFetchType";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const res = await req.json();
        const reqBody = FetchParamSchema.safeParse(res);
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
        const is_report = reqBody.data.is_report;
        const tags = reqBody.data.tags ? reqBody.data.tags : [];
        const slug = reqBody.data.slug
        const posted_by = reqBody.data.admin_email ? reqBody.data.admin_email : ""
        const recent = reqBody.data.recent ? true : false
        let blogs;


        if (recent) {
            blogs = await prismadb.blog.findMany({
                where: {
                    is_report: is_report
                },
                take: 4,
                orderBy: {
                    published: 'desc'
                },
                select: {
                    title: true,
                    slug: true,
                    published: true,
                    tor: true,
                    is_report: true,
                    content: true,
                    author: true,
                    posted_by: {
                        select: {
                            email: true,
                            name: true,
                        }
                    },
                    tags: {
                        select: {
                            name: true,
                        }
                    },
                    thumbnail: {
                        select: {
                            data: true,
                        }
                    },
                }
            })
            return Response.json({
                code: 0,
                message: "Successfully fetched the blogs/Reports",
                data: blogs
            })
        }

        const admin_posted = await prismadb.admin.findUnique({
            where: {
                email: posted_by
            }
        })

        if (slug) {
            blogs = await prismadb.blog.findMany({
                where: {
                    slug: slug
                },
                select: {
                    title: true,
                    slug: true,
                    published: true,
                    tor: true,
                    is_report: true,
                    content: true,
                    author: true,
                    posted_by: {
                        select: {
                            email: true,
                            name: true,
                        }
                    },
                    tags: {
                        select: {
                            name: true,
                        }
                    },
                    thumbnail: {
                        select: {
                            data: true,
                        }
                    },
                }
            })
        }
        else {
            if (tags.length === 0) {
                if (admin_posted) {
                    blogs = await prismadb.blog.findMany({
                        where: {
                            is_report: is_report,
                            admin_id: admin_posted.id
                        },
                        select: {
                            title: true,
                            slug: true,
                            published: true,
                            tor: true,
                            is_report: true,
                            content: true,
                            author: true,
                            posted_by: {
                                select: {
                                    email: true,
                                    name: true,
                                }
                            },
                            tags: {
                                select: {
                                    name: true,
                                }
                            },
                            thumbnail: {
                                select: {
                                    data: true,
                                }
                            },
                        }
                    })
                }
                else {
                    blogs = await prismadb.blog.findMany({
                        where: {
                            is_report: is_report
                        },
                        select: {
                            title: true,
                            slug: true,
                            published: true,
                            tor: true,
                            is_report: true,
                            content: true,
                            author: true,
                            posted_by: {
                                select: {
                                    email: true,
                                    name: true,
                                }
                            },
                            tags: {
                                select: {
                                    name: true,
                                }
                            },
                            thumbnail: {
                                select: {
                                    data: true,
                                }
                            },
                        }
                    })
                }
            }
            else {
                if (admin_posted) {
                    blogs = await prismadb.blog.findMany({
                        where: {
                            is_report: is_report,
                            AND: tags.map((tag: string) => ({
                                tags: {
                                    some: {
                                        name: tag,
                                    },
                                },
                            })),
                            admin_id: admin_posted.id
                        },
                        select: {
                            title: true,
                            slug: true,
                            published: true,
                            tor: true,
                            is_report: true,
                            content: true,
                            author: true,
                            posted_by: {
                                select: {
                                    email: true,
                                    name: true,
                                }
                            },
                            tags: {
                                select: {
                                    name: true,
                                }
                            },
                            thumbnail: {
                                select: {
                                    data: true
                                }
                            },
                        }
                    })
                }
                else {
                    blogs = await prismadb.blog.findMany({
                        where: {
                            is_report: is_report,
                            AND: tags.map((tag: string) => ({
                                tags: {
                                    some: {
                                        name: tag,
                                    },
                                },
                            })),
                        },
                        select: {
                            title: true,
                            slug: true,
                            published: true,
                            tor: true,
                            is_report: true,
                            content: true,
                            author: true,
                            posted_by: {
                                select: {
                                    email: true,
                                    name: true,
                                }
                            },
                            tags: {
                                select: {
                                    name: true,
                                }
                            },
                            thumbnail: {
                                select: {
                                    data: true,
                                }
                            },
                        }
                    })
                }
            }
        }
        return Response.json({
            code: 0,
            message: "Successfully fetched the blogs/Reports",
            data: blogs
        })
    } catch (error: any) {
        return Response.json({
            code: -1,
            message: "Internal Server Error",
            error: { ...error }
        })
    }
}