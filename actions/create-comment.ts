'use server'
import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"


import { z } from "zod"


const commentSchema = z.object({
    body: z.string().min(1)
})

type commentErrorState = {
    errors: {
        body?: string[],
        formErrors?: string[]
    }
}



export const createComment = async (articleId: string, prevState: commentErrorState, formData: FormData): Promise<commentErrorState> => {
    const validate = commentSchema.safeParse({ body: formData.get('body') })

    if (!validate.success) {
        return {
            errors: validate.error.flatten().fieldErrors


        }

    }


    const { userId } = await auth();
    if (!userId) {
        return {
            errors: {
                formErrors: ['please login first']

            }
        }
    }

    const existanceUser = await prisma.user.findUnique({
        where: { clerkId: userId }
    })

    if (!existanceUser) {
        return {
            errors: {
                formErrors: ['User not found']
            }
        }
    }


    try {

        const createComment = await prisma.comment.create(
            {
                data: {
                    body: validate.data.body,
                    authorId: existanceUser.id,
                    articleId: articleId

                }
            }
        )
    } catch (error) {

    }

    revalidatePath(`/article/${articleId}`);

    return {
        errors: {}
    }

}