
import AllArticlePage from '@/components/article/AllArticlePage'
import ArticleSearchBar from '@/components/article/ArticleSearchBar'
import { Button } from '@/components/ui/button'
import { searchArticleByQuery } from '@/lib/fetch-artilce-by-query'
import Link from 'next/link'

import React, { Suspense } from 'react'
import { number } from 'zod'

type searchQueryProps = {

    searchParams: Promise<{ search?: string; page: string }>
}

const ITEMS_PER_PAGE = 3;

const page: React.FC<searchQueryProps> = async ({ searchParams }) => {
    const searchText = (await searchParams).search || ''
    const currentPage = Number((await searchParams).page || 1);
    const skip = (currentPage - 1) * ITEMS_PER_PAGE;
    const take = ITEMS_PER_PAGE;
    const { articles, total } = await searchArticleByQuery(searchText, skip, take);

    const totalPages = Math.ceil(total / ITEMS_PER_PAGE)



    return (
        <div className='min-h-screen w-full bg-background'>
            <main className='container mx-auto px-4 py-12 sm:px-6 lg:text-5xl'>

                <div className='mb-12 space-y-6 text-center'>
                    <h1>All Articles</h1>


                    {/* seaarch bar */}

                    <ArticleSearchBar ></ArticleSearchBar>
                </div>
                <Suspense fallback={<span>Loading..</span>}>

                    {/* all articles */}
                    <AllArticlePage articles={articles}></AllArticlePage>
                </Suspense>

                {/* pagination */}
                <div className='gap-2 flex justify-center items-center mt-12'>
                    <Link href={`?search=${searchText}&page=${currentPage - 1}`} passHref>
                        <Button disabled={currentPage === 1} variant={'ghost'}>Prev</Button>
                    </Link>
                    {
                        Array.from({ length: totalPages }).map((_, index) => (

                            <Link
                                className=''
                                key={index} href={`?search=${searchText}&page=${index + 1}`}>
                                <Button disabled={currentPage === totalPages} variant={`${currentPage === index + 1 ? 'destructive' : "ghost"}`}>{index + 1}</Button>

                            </Link>
                        )
                        )
                    }
                    <Link href={`?search=${searchText}&page=${currentPage + 1}`} passHref>
                        <Button disabled={currentPage === totalPages} variant={'ghost'}>Next</Button>
                    </Link>

                </div>

            </main>


        </div>
    )
}

export default page
