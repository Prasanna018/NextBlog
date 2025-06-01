import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { searchArticleByQuery } from '@/lib/fetch-artilce-by-query'
import { Prisma } from '@prisma/client'


type searchProps = {
    // searchText: string
    articles: Prisma.ArticleGetPayload<{
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }
        }
    }>[];
}

const AllArticlePage: React.FC<searchProps> = async ({ articles }) => {



    if (articles.length == 0) {
        return <div className='flex justify-center items-center text-2xl'>
            <span>Article not found that you searched</span>

        </div>
    }
    return (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {
                articles.map((article) => (

                    <Card key={article.id} className=' group  translate-all relative overflow-hidden hover:shadow-lg'>
                        <div className='p-5'>
                            <div className='h-48 rounded-xl relative mb-4 w-full overflow-hidden'>
                                <Image src={article.featuredImage} alt='logo' fill >

                                </Image>

                            </div>

                            <h3 className='text-xl font-semibold'>{article.title}</h3>
                            <span className='mt-2'>{article.category}</span>

                        </div>

                        <div className='flex justify-between items-center p-2'>
                            <div className='flex gap-4 items-center'>

                                <Avatar>
                                    <AvatarImage src={article.author.imageUrl as string}>
                                    </AvatarImage>
                                    <AvatarFallback>Pg</AvatarFallback>

                                </Avatar>
                                <span className='text-sm'>

                                    {article.author.name}
                                </span>


                            </div>
                            <div className='text-sm'>
                                <span className='text-sm'>
                                    {article.createdAt.toDateString()}

                                </span>
                            </div>
                        </div>

                    </Card>
                ))
            }



        </div>
    )
}

export default AllArticlePage
