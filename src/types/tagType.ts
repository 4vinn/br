import { z } from "zod";

export const TagSchema = z.object({
    tag_names : z.array(z.string({required_error : "Tag name is required"}))
});