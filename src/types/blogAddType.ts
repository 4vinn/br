import { z } from "zod";

export const AddBlogSchema = z.object({
    title: z.string({ required_error: "Blog Title is required" }),
    content: z.string({ required_error: "Content is required" }),
    time_of_reading: z.string({ required_error: "Time of reading is required" }),
    thumbnail: z.string({ required_error: "Thumbnail image in base64 image is required" }),
    author: z.string({ required_error: "Author Name is required" }),
    tags: z.array(z.string({ required_error: "Tags are required" })),
    is_report: z.boolean({ required_error: "It is a report or a blog mention it." })
});