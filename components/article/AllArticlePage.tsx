import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'


const AllArticlePage = () => {
    return (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Card className=' group  translate-all relative overflow-hidden hover:shadow-lg'>
                <div className='p-5'>
                    <div className='h-48 rounded-xl relative mb-4 w-full overflow-hidden'>
                        {/* <Image src={''} >

                        </Image> */}

                    </div>

                    <h3 className='text-xl font-semibold'>Title</h3>
                    <span className='mt-2'>web developement</span>

                </div>

                <div className='flex justify-between items-center p-2'>
                    <div className='flex gap-4 items-center'>

                        <Avatar>
                            <AvatarImage src={''}>
                            </AvatarImage>
                            <AvatarFallback>Pg</AvatarFallback>

                        </Avatar>
                        <span className='text-sm'>

                            Prasanna Gaikwad
                        </span>


                    </div>
                    <div className='text-sm'>
                        <span className='text-sm'>
                            12 feb

                        </span>
                    </div>
                </div>

            </Card>


        </div>
    )
}

export default AllArticlePage
