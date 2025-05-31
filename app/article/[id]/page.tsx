import ArticleDetailsPage from '@/components/article/ArticleDetailsPage'
import { prisma } from '@/lib/prisma'
import React from 'react'

type PostDetailsProp = {
    params: Promise<{ id: string }>
}

const page: React.FC<PostDetailsProp> = async ({ params }) => {
    const id = (await params).id
    console.log(id)
    const article = await prisma.article.findUnique({
        where: { id: id },
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true,
                }
            }
        }
    })

    if (!article) {
        return <h1>Article Not Found</h1>
    }
    return (
        <div>
            <ArticleDetailsPage article={article}></ArticleDetailsPage>

        </div>
    )
}

export default page
