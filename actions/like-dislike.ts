'use server'

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";


export const likeDislikePost = async (articleId: string) => {

    const { userId } = await auth();
    if (!userId) {
        throw new Error('You must have login first to like this post')

    }
    const user = await prisma.user.findUnique({
        where: { clerkId: userId }
    })
    if (!user) {
        throw new Error('User not found')
    }
    const existantLike = await prisma.like.findFirst({
        where: { articleId, userId: user.id }
    })

    if (existantLike) {
        await prisma.like.delete({
            where: { id: existantLike.id }
        })
    } else {
        await prisma.like.create({
            data: {
                articleId,
                userId: user.id
            }
        })
    }

    revalidatePath(`/article/${articleId}`);


}