import prismadb from "@/lib/prismadb";
export async function generateUniqueSlug(title: string) {
    let slug = title.toLowerCase().replace(/\s+/g, '-');

    slug = slug.replace(/[^a-z0-9-]/g, '');

    const slugs = await prismadb.blog.findMany({
        select: {
            slug: true
        }
    });
    const existingSlugs = slugs.map((slug) => {
        return slug.slug
    });

    let count = 1;
    let uniqueSlug = slug;
    while (existingSlugs.includes(uniqueSlug)) {
        uniqueSlug = `${slug}-${count}`;
        count++;
    }
    return uniqueSlug;
}

