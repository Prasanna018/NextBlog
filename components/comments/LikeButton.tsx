'use client';
import React, { useOptimistic, useTransition } from 'react'
import { Button } from '../ui/button'
import { Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { likeDislikePost } from '@/actions/like-dislike';
import { Like } from '@prisma/client';



type LikesProps = {
    articleId: string,
    likes: Like[],
    isLiked: boolean

}
const LikeButton: React.FC<LikesProps> = ({ articleId, likes, isLiked }) => {
    const [optimalLike, setOptimalLike] = useOptimistic(likes.length);
    const [isPending, startTransition] = useTransition();
    const handleLikeDislike = async () => {
        startTransition(async () => {

            setOptimalLike(isLiked ? optimalLike - 1 : optimalLike + 1)
            await likeDislikePost(articleId);
        })


    }
    return (
        <div className='flex mb-12 gap-4 border-t-2 pt-8'>
            <form action={handleLikeDislike}>
                <Button disabled={isPending} type='submit'>
                    <ThumbsUp></ThumbsUp>
                    {optimalLike}
                </Button>

            </form>

            <Button>
                <Bookmark></Bookmark>
            </Button>
            <Button>
                <Share2></Share2>
            </Button>

        </div>
    )
}

export default LikeButton
