'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deletePost = async (articleId: string) => {
    await prisma.article.delete({
        where: { id: articleId }
    })

    revalidatePath('dashboard')
}