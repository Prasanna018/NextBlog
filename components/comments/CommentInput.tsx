'use client'
import React, { useActionState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Prisma } from '@prisma/client'
import { createComment } from '@/actions/create-comment'

type commentInput = {
    articleId: string
}

const CommentInput: React.FC<commentInput> = ({ articleId }) => {
    const [formState, action, isPending] = useActionState(createComment.bind(null, articleId), { errors: {} })
    console.log(formState)

    return (
        <form action={action} className='mb-8'>

            <div className='flex gap-4'>
                <Avatar>
                    <AvatarImage></AvatarImage>
                    <AvatarFallback>PG</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                    <Input
                        name='body'
                        type='text'
                        placeholder='Post Comments...'
                    ></Input>
                    <div className='flex justify-end mt-4'>
                        <Button disabled={isPending} type='submit'>
                            {isPending ? 'Posting..' : "Post"}
                        </Button>

                    </div>
                </div>


            </div>
        </form>
    )
}

export default CommentInput
