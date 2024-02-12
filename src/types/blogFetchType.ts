import { z } from "zod";

export const FetchParamSchema = z.object({
    is_report: z.boolean({ required_error: "You have to mention that it is blog or not" }),
    tags: z.array(z.string({ required_error: "tags are required"})).optional(),
    slug: z.string({ required_error: "Blog Slug is required to fetch the blog" }).optional(),
    admin_email : z.string({required_error : "Admin Email is required"}).optional()
});