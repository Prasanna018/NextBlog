import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FileText, MessageCircle, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import RecentArticles from './RecentArticles'

const BlogDashboard = () => {
    return (
        <div className='flex-1 p-4 md:p-8'>
            <div className='flex justify-between items-center mb-8'>
                <div>
                    <h1 className='font-bold text-2xl'>Blog Dashboard</h1>
                    <p>Manage Your Content and Analytics</p>
                </div>

                <Link href={'/dashboard/article/create'}>
                    <Button className='cursor-pointer'><Plus className='h-4 w-4'></Plus> New Article</Button>
                </Link>
            </div>
            {/* quick stats */}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Card>
                    <CardHeader className='flex justify-between'>
                        <CardTitle className='text-2xl font-medium'>Total Articles</CardTitle>
                        <FileText className='h-6 w-6'></FileText>
                    </CardHeader>
                    <CardContent>
                        <div className='text-2xl font-bold'>2</div>
                        <p>+5 from last month</p>
                    </CardContent>

                </Card>

                <Card>
                    <CardHeader className='flex justify-between'>
                        <CardTitle className='text-2xl font-medium'>Total Comments</CardTitle>
                        <MessageCircle className='h-6 w-6'></MessageCircle>
                    </CardHeader>
                    <CardContent>
                        <div className='text-2xl font-bold'>2</div>
                        <p>+5 from last month</p>
                    </CardContent>

                </Card>

                <Card>
                    <CardHeader className='flex justify-between'>
                        <CardTitle className='text-2xl font-medium'>AVG. Reading</CardTitle>
                        <MessageCircle className='h-6 w-6'></MessageCircle>
                    </CardHeader>
                    <CardContent>
                        <div className='text-2xl font-bold'>2.0</div>
                        <p>2.1</p>
                    </CardContent>

                </Card>

            </div>

            <div className='mt-6'>


                <div>
                    <RecentArticles></RecentArticles>
                </div>
            </div>
        </div>
    )
}

export default BlogDashboard
