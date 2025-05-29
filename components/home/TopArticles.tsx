import React from 'react'
import { Card } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Calendar, Calendar1Icon, CalendarCheck, TimerIcon } from 'lucide-react'

function TopArticles() {
    return (
        <div className='w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
            {[1, 2, 3].map((item) => (
                <Card key={item} className='h-110 p-2 bg-background  rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                    <Link href={`/articles/${item}`} className='h-full w-full '>
                        <div className='relative mb-4 h-58 w-full overflow-hidden rounded-xl'>
                            <Image
                                src={'/logo.webp'}
                                alt='image'
                                fill
                                className='object-cover'


                            >

                            </Image>

                        </div>
                        <div className='flex py-2
                         gap-3 items-center text-gray-600'>
                            <Avatar>
                                <AvatarImage src={''}></AvatarImage>
                                <AvatarFallback className='dark:bg-slate-200 text-sla'>PG</AvatarFallback>

                            </Avatar>
                            <span className='dark:text-slate-50'>Prasanna Gaikwad</span>
                        </div>
                        <h3 className='text-xl font-bold truncate'> Lets start with web developement developement developement developement </h3>
                        <div className='mt-2 rounded-2xl py-2'>
                            <span className='mt-2 bg-gray-100 rounded-2xl  dark:bg-gray-700/40 py-1 px-2

                            
                            '>web developement</span>
                        </div>
                        <div className='mt-2 flex py-2
                          items-center justify-between gap-2'>
                            <span className='text-gray-600 flex gap-2'><CalendarCheck className='dark:text-white text-black'></CalendarCheck > 12 feb</span>
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