import EditArticle from '@/components/article/EditArticle'
import { prisma } from '@/lib/prisma'
import React from 'react'


type EditArticleProps = {
    params: Promise<{ id: string }>
}
const page: React.FC<EditArticleProps> = async ({ params }) => {
    const id = (await params).id
    const article = await prisma.article.findUnique({
        where: {
            id
        }
    })

    if (!article) {
        return <span>Article Not Found</span>
    }

    return (
        <div>
            <EditArticle article={article}></EditArticle>

        </div>
    )
}

export default page
