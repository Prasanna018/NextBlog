import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowUpLeftFromSquare } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import Link from 'next/link'

const RecentArticles = () => {
    return (
        <div className='mb-8'>
            <Card>

                <CardHeader>
                    <div className='flex justify-between items-center'>
                        <CardTitle>Recent Articles</CardTitle>
                        <Button>View Articles </Button>

                    </div>




                </CardHeader>
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
                            <TableRow className=''>
                                <TableCell>title is here</TableCell>
                                <TableCell className='flex justify-start'>
                                    <Badge variant={'secondary'} className='text-green-400 p-2'>Published</Badge>
                                </TableCell>
                                <TableCell>
                                    5
                                </TableCell>
                                <TableCell>
                                    12 feb
                                </TableCell>
                                <TableCell>
                                    <div className='flex gap-2'>
                                        <Link href={`/dashboard/article/${1234}/edit`}>
                                            <Button className='cursor-pointer' variant={'secondary'}>Edit</Button>
                                        </Link>
                                        <DeleteButton></DeleteButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    )
}

export default RecentArticles


const DeleteButton = () => {
    return <form>

        <Button className='cursor-pointer' size={'sm'} type='submit' variant={'destructive'}>
            Delete
        </Button>
    </form>
}