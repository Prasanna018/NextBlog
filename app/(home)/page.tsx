import BlogFooter from '@/components/home/BlogFooter'
import HeroSection from '@/components/home/HeroSection'
import Navbar from '@/components/home/Navbar'
import TopArticles from '@/components/home/TopArticles'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { Suspense } from 'react'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className=''>

        <HeroSection></HeroSection>
      </div>
      <section className='relative py-16 md:py-20'>
        <div className='container mx-auto'>

          <div className='pb-8'>
            <h2 className='font-bold text-black dark:text-white/70 text-3xl text-center md:text-4xl'>Featured Articles</h2>
          </div>
          <div>
            <Suspense fallback={<span>Loading....</span>}>


              <TopArticles></TopArticles>
            </Suspense>
          </div>
        </div>
        <div className='py-8 text-center'>
          <Link href={'/article'}>
            <Button
              className='p-6 cursor-pointer text-lg'
            >
              View All Articles

            </Button>
          </Link>
        </div>
      </section>
      <footer>
        <BlogFooter></BlogFooter>
      </footer>

    </div>
  )
}

export default Home
