'use client'
import React, { startTransition, useActionState, useTransition } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowUpLeftFromSquare } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { Article, Prisma } from '@prisma/client'
import { deletePost } from '@/actions/delete-post'



type RecentArticlesProp = {
    articles: Prisma.ArticleGetPayload<{
        include: {
            comments: true;
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }

        },



    }>[];

}

const RecentArticles: React.FC<RecentArticlesProp> = ({ articles }) => {
    return (
        <div className='mb-8'>
            <Card>

                <CardHeader>
                    <div className='flex justify-between items-center'>
                        <CardTitle>Recent Articles</CardTitle>
                        <Button>View Articles </Button>

                    </div>




                </CardHeader>

                {
                    !articles.length ? (<CardContent>No Articles Found</CardContent>) :
                        (
                            <CardContent className=''>
                                <Table>
                                    <TableHeader>
                                        <TableRow className=''>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Comments</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Actions</TableHead>




                                        </TableRow>
                                    </TableHeader>


                                    <TableBody>

                                        {
                                            articles.map((article) => (
                                                <TableRow key={article.id} className=''>
                                                    <TableCell>{article.title}</TableCell>
                                                    <TableCell className='flex justify-start'>
                                                        <Badge variant={'secondary'} className='text-green-400 p-2'>Published</Badge>
                                                    </TableCell>
                                                    <TableCell>
                                                        {article?.comments.length}
                                                    </TableCell>
                                                    <TableCell>
                                                        {article.createdAt.toDateString()}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className='flex gap-2'>
                                                            <Link href={`/dashboard/article/${article.id}/edit`}>
                                                                <Button className='cursor-pointer' variant={'secondary'}>Edit</Button>
                                                            </Link>
                                                            <DeleteButton articleId={article.id} ></DeleteButton>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </CardContent>
                        )

                }

            </Card>

        </div>
    )
}

export default RecentArticles


type deleteArticleProp = {
    articleId: string
}

const DeleteButton: React.FC<deleteArticleProp> = ({ articleId }) => {
    const [isPending, startTransition] = useTransition();
    return <form action={() => {
        startTransition(async () => {
            await deletePost(articleId)
        })
    }}>

        <Button disabled={isPending} className='cursor-pointer' size={'sm'} type='submit' variant={'destructive'}>
            {isPending ? "Deleting" : "Delete"}
        </Button>
    </form>
}