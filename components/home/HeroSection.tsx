'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'

const HeroSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className='w-full min-h-screen overflow-hidden relative bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700'>
            {/* Main content container with proper max-width */}
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12'>
                    {/* Text Content */}
                    <motion.div
                        className='w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className='font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 leading-tight'
                            variants={itemVariants}
                        >
                            Your Daily Dose of <br className='hidden sm:block' />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300'>
                                <Typewriter
                                    words={['Insight', 'Inspiration', 'Knowledge', 'Creativity']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            className='text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0'
                            variants={itemVariants}
                        >
                            Discover thought-provoking articles, creative ideas, and inspiring stories
                            to fuel your mind every day.
                        </motion.p>

                        <motion.div
                            className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'
                            variants={itemVariants}
                        >
                            <Link href='/article' >

                                <button className='px-6 py-2 sm:px-8 sm:py-3 bg-white text-purple-900 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700'>
                                    Explore Articles
                                </button>

                            </Link>
                        </motion.div>

                        <motion.div
                            className='mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4'
                            variants={itemVariants}
                        >
                            <div className='flex -space-x-3 sm:-space-x-4'>
                                {[1, 2, 3].map((item) => (
                                    <Image
                                        key={item}
                                        src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80&${item}`}
                                        width={40}
                                        height={40}
                                        alt="User"
                                        className='rounded-full border-2 border-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
                                    />
                                ))}
                            </div>
                            <div className='text-white text-center sm:text-left'>
                                <p className='font-bold text-sm sm:text-base'>10K+ Readers</p>
                                <p className='text-xs sm:text-sm text-gray-300'>Join our community</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className='w-full md:w-1/2 relative'
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]'>
                            <Image
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Blog reading"
                                fill
                                className='object-cover rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl lg:shadow-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                            <div className='absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl z-0'></div>
                            <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl z-0'></div>
                        </div>

                        {/* Floating card */}
                        <motion.div
                            className='absolute -bottom-6 right-0 md:-right-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl w-48 sm:w-56 md:w-64'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <div className='p-1 sm:p-2 bg-purple-100 rounded-md sm:rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold text-gray-800 text-xs sm:text-sm md:text-base'>Trending Article</p>
                                    <p className='text-gray-600 text-xs sm:text-sm'>"The Future of Creativity"</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating background elements */}
            <motion.div
                className='absolute top-12 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-pink-500 opacity-20 blur-lg sm:blur-xl'
                animate={{
                    y: [0, 15, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className='absolute bottom-12 sm:bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-indigo-500 opacity-20 blur-lg sm:blur-xl'
                animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </section>
    )
}

export default HeroSection