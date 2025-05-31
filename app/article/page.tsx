import AllArticlePage from '@/components/article/AllArticlePage'
import ArticleSearchBar from '@/components/article/ArticleSearchBar'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen w-full bg-background'>
            <main className='container mx-auto px-4 py-12 sm:px-6 lg:text-5xl'>

                <div className='mb-12 space-y-6 text-center'>
                    <h1>All Articles</h1>


                    {/* seaarch bar */}

                    <ArticleSearchBar></ArticleSearchBar>
                </div>
                {/* all articles */}
                <AllArticlePage></AllArticlePage>

                {/* pagination */}
                <div className='gap-2 flex justify-center mt-12'>
                    <Button variant={'ghost'}>Prev</Button>
                    <Button variant={'ghost'}>1</Button>
                    <Button variant={'ghost'}>2</Button>
                    <Button variant={'ghost'}>3</Button>
                    <Button variant={'ghost'}>next</Button>

                </div>

            </main>


        </div>
    )
}

export default page
