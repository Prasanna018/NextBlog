import React from 'react'
import { Card } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Calendar, Calendar1Icon, CalendarCheck, TimerIcon } from 'lucide-react'
import { prisma } from '@/lib/prisma'

async function TopArticles() {
    const articles = await prisma?.article?.findMany({
        orderBy: {
            createdAt: 'desc',

        },
        include: {
            comments: true,
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }
        }
    });
    console.log(articles);


    return (
        <div className='w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
            {articles.slice(0, 3).map((article) => (
                <Card key={article.id} className='h-110 p-2 bg-background  rounded-lg shadow-sm hover:shadow-md transition-shadow '>
                    <Link href={`/article/${article.id}`} className='h-full w-full '>
                        <div className='relative mb-4 h-58 w-full overflow-hidden rounded-xl'>

                            {
                                article.featuredImage &&
                                <Image
                                    src={article.featuredImage}
                                    alt='image'
                                    fill
                                    className='object-cover'


                                >

                                </Image>
                            }


                        </div>
                        <div className='flex py-2
                         gap-3 items-center text-gray-600'>
                            <Avatar>
                                <AvatarImage src={article?.author?.imageUrl as string}></AvatarImage>
                                <AvatarFallback className='dark:bg-slate-200 text-sla'>PG</AvatarFallback>

                            </Avatar>
                            <span className='dark:text-slate-50'>{article?.author?.name}</span>
                        </div>
                        <h3 className='text-xl font-bold truncate'>{article.title} </h3>
                        <div className='mt-2 rounded-2xl py-2'>
                            <span className='mt-2 bg-gray-100 rounded-2xl  dark:bg-gray-700/40 py-1 px-2

                            
                            '>{article.category}</span>
                        </div>
                        <div className='mt-2 flex py-2
                          items-center justify-between gap-2'>
                            <span className='text-gray-600 flex gap-2'><CalendarCheck className='dark:text-white text-black'></CalendarCheck >{article.createdAt.toDateString()}</span>
                            <span className='flex gap-2 text-gray-400
                            '><TimerIcon className='text-black dark:text-white'></TimerIcon> {12} min to read</span>

                        </div>
                    </Link>
                </Card>
            ))}
        </div>
    )
}

export default TopArticles