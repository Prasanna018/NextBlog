'use server'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

import { z } from 'zod'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const createPostSchema = z.object({
    title: z.string().min(3),
    category: z.string().min(3).max(50),
    content: z.string().min(10),

})

type createArticleFormState = {
    errors: {
        title?: string[],
        content?: string[],
        featuredImage?: string[],
        category?: string[],
        formErrors?: string[]
    }
}
export const createPost = async (prevState: createArticleFormState, formData: FormData): Promise<createArticleFormState> => {
    const validate = createPostSchema.safeParse({
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content')
    })

    if (!validate.success) {
        return {
            errors: validate.error.flatten().fieldErrors
        }
    }
    const { userId } = await auth();

    if (!userId) {
        return {
            errors: {
                formErrors: ['You have to login first!']
            }
        }
    }

    const existanceUser = await prisma.user.findUnique({
        where: {
            clerkId: userId
        }
    })
    if (!existanceUser) {
        return {
            errors: {
                formErrors: ['Please login or signin first']
            }
        }
    }
    console.log(formData);

    const imageFile = formData.get('featuredImage') as File || null
    if (!imageFile || imageFile.name === 'undefined') {
        return {
            errors: {
                featuredImage: ['Image file is required']
            }
        }
    }
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResponse: UploadApiResponse | undefined = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }

            }
        );
        uploadStream.end(buffer);
    })

    const imageUrl = uploadResponse?.secure_url;

    if (!imageUrl) {
        return {
            errors: {
                featuredImage: ['failed to upload image']
            }
        }
    }


    try {
        const savePost = await prisma.article.create({
            data: {
                title: validate.data.title,
                content: validate.data.content,
                category: validate.data.category,
                featuredImage: imageUrl,
                authorId: existanceUser?.id

            }
        })

    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                errors: {
                    formErrors: [error.message]
                }
            }
        } else {
            return {
                errors: {
                    formErrors: ['internal server error']
                }
            }
        }

    }
    revalidatePath('/dashboard')
    redirect('/dashboard')


}