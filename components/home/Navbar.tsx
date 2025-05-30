'use client';
import { BookAIcon, LayoutDashboardIcon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import SearchInput from './SearchInput'
import { ToggleMode } from './ToggleMode'

import {

    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { motion, motionValue } from 'motion/react';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div className='sticky top-0 w-full border border-b z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <Link href={'/'}>
                            <span className='md:text-3xl text-xl font-bold bg-gradient-to-r from-purple-600 to bg-indigo-400 bg-clip-text text-transparent'>
                                <span>
                                    Next
                                </span>
                                <span className=''>
                                    Blog
                                </span>
                            </span>
                        </Link>
                    </div>

                    {/* desktop menu */}
                    <div className='hidden md:flex items-center gap-4'>


                        <Link href={'/article'} className='flex px-3 py-2 hover:bg-accent rounded-lg duration-300 items-center gap-2'>
                            <BookAIcon className='h-6 w-6' size={28} color='blue'></BookAIcon> <span className='text-lg font-semibold text-blue-900 dark:text-blue-500'>Article</span>
                        </Link>

                        <Link href={'/dashboard'} className='flex px-3 py-2 hover:bg-accent rounded-lg duration-300 items-center gap-2'>
                            <LayoutDashboardIcon className='h-6 w-6' size={28} color='blue'></LayoutDashboardIcon> <span className='text-lg font-semibold text-blue-900 dark:text-blue-500'>Dashboard</span>
                        </Link>


                    </div>

                    <div className=' flex items-center gap-3'>
                        <SearchInput></SearchInput>
                        <ToggleMode></ToggleMode>
                    </div>
                    <div className='hidden md:flex items-center gap-2'>
                        <SignedOut>
                            <SignInButton mode='modal'>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Button
                                        variant="ghost"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        Sign in
                                    </Button>
                                </motion.div>
                            </SignInButton>

                            <SignUpButton mode='modal'>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Button
                                        variant="default"
                                        className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors rounded-lg"
                                    >
                                        Sign up
                                    </Button>
                                </motion.div>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="relative"
                            >
                                <UserButton />
                                <motion.span
                                    className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>
                        </SignedIn>
                    </div>
                    <Button
                        onClick={() => setIsMobile(!isMobile)}
                        variant={'ghost'} className='md:hidden'>
                        {
                            isMobile ? (<X className='h-5 w-5'></X>) : (<Menu className='h-5 w-5'></Menu>)
                        }
                    </Button>
                </div>



            </div>
            {
                isMobile && (
                    <div className="w-full p-4 md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center space-y-4"
                        >
                            {/* Search Input with subtle shadow and transition */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-2 transition-all duration-200"
                            >
                                <SearchInput />
                            </motion.div>

                            {/* Navigation Links with better spacing and visual hierarchy */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="w-full max-w-md space-y-1"
                            >
                                <Link
                                    href="/article"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
               hover:bg-blue-50 dark:hover:bg-blue-900/30 
               hover:shadow-sm active:scale-[0.98]
               text-blue-600 dark:text-blue-400"
                                >
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        <BookAIcon className="h-5 w-5" />
                                    </motion.div>
                                    <span className="text-sm font-medium">Article</span>
                                </Link>

                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
               hover:bg-blue-50 dark:hover:bg-blue-900/30 
               hover:shadow-sm active:scale-[0.98]
               text-blue-600 dark:text-blue-400"
                                >
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        <LayoutDashboardIcon className="h-5 w-5" />
                                    </motion.div>
                                    <span className="text-sm font-medium">Dashboard</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Buttons section with staggered animations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className='w-full py-6'
                        >
                            <div className="w-full flex flex-col gap-3">
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
                                            >
                                                Sign In
                                            </Button>
                                        </motion.div>
                                    </SignInButton>

                                    <SignUpButton mode="modal">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors"
                                            >
                                                Create Account
                                            </Button>
                                        </motion.div>
                                    </SignUpButton>
                                </SignedOut>
                            </div>
                            <SignedIn>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <UserButton />
                                </motion.div>
                            </SignedIn>
                        </motion.div>
                    </div>
                )
            }


        </div>
    )
}

export default Navbar
