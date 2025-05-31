import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Prisma } from '@prisma/client'

type commentsProps = {
    comments: Prisma.CommentGetPayload<{
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }
        }
    }>[]
}

const CommentList: React.FC<commentsProps> = async ({ comments }) => {
    return (
        <div className='space-y-6'>
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className='flex gap-4 p-4 rounded-lg  shadow-sm hover:shadow-md transition-shadow'
                >
                    <Avatar className='h-10 w-10 border-2 border-primary'>
                        <AvatarImage
                            src={comment.user.imageUrl as string}
                            className='object-cover'
                        />
                        <AvatarFallback className='bg-gray-200 dark:bg-gray-600'>
                            {comment.user.name?.charAt(0).toUpperCase() || 'U'}
                        </AvatarFallback>
                    </Avatar>

                    <div className='flex-1'>
                        <div className='flex items-baseline gap-3 mb-1'>
                            <span className='font-semibold text-gray-900 dark:text-white'>
                                {comment.user.name}
                            </span>
                            <span className='text-xs text-gray-500 dark:text-gray-400'>
                                {comment.createdAt.toDateString()}
                            </span>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>
                            {comment.body}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentList