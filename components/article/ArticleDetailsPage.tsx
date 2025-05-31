import { Article, Prisma } from '@prisma/client'
import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'
import LikeButton from '../comments/LikeButton'
import CommentList from '../comments/CommentList'
import CommentInput from '../comments/CommentInput'
import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'


type ArticleProps = {
    article: Prisma.ArticleGetPayload<{
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }
        }
    }>;
};
const ArticleDetailsPage: React.FC<ArticleProps> = async ({ article }) => {
    const comments = await prisma.comment.findMany({
        where: { articleId: article.id },
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true,
                }
            }

        }
    })

    const likes = await prisma.like.findMany({
        where: {
            articleId: article.id
        }
    })
    const { userId } = await auth();
    const user = await prisma.user.findUnique({ where: { clerkId: userId as string } })
    const isLiked: boolean = likes.some((like) => like.userId === user?.id)
    return (
        <div className='min-h-screen bg-background'>
            <main className='container mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                <article className='mx-auto max-w-3xl'>
                    <header className='mb-12'>
                        <div className='flex flex-wrap gap-4 mb-4'>
                            <span className='rounded-full bg-primary/10 px-3 py-1'>

                                {article.category}
                            </span>

                        </div>
                        <h1 className='font-bold text-4xl'>{article.title}</h1>

                    </header>
                    <div className='flex items-center gap-x-4'>
                        <Avatar>
                            <AvatarImage src={article.author.imageUrl as string}>

                            </AvatarImage>
                            <AvatarFallback>PG</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>

                            <span className='font-medium'>{article.author.name}</span>
                            <span className='text-sm'>2 min to read</span>
                        </div>




                    </div>


                    {/* <div className='mt-4 w-full h-50'>

<Image
src={article.featuredImage}
alt='logo'
                width={400}
                height={400}
                >
                
            </Image>
            
            </div> */}
                    <section className='mb-12 mt-5 max-w-none'

                        dangerouslySetInnerHTML={{ __html: article.content }}
                    ></section>

                    {/* like button */}
                    <LikeButton articleId={article.id} likes={likes} isLiked={isLiked} />


                    {/* comment INout */}
                    <CommentInput articleId={article.id}></CommentInput>
                    {/* comment section */}
                    <CommentList comments={comments}></CommentList>

                </article>

            </main>




        </div>

    )
}






export default ArticleDetailsPage
