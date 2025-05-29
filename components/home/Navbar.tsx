'use client';
import { BookAIcon, LayoutDashboardIcon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import SearchInput from './SearchInput'
import { ToggleMode } from './ToggleMode'


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

                        <Button>Login</Button>
                        <Button>SignUp</Button>

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
                        <div className="flex flex-col items-center space-y-4">
                            {/* Search Input with subtle shadow and transition */}
                            <div className="w-full py-2 transition-all duration-200">
                                <SearchInput />
                            </div>

                            {/* Navigation Links with better spacing and visual hierarchy */}
                            <div className="w-full max-w-md space-y-1">
                                <Link
                                    href="/article"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
                   hover:bg-blue-50 dark:hover:bg-blue-900/30 
                   hover:shadow-sm active:scale-[0.98]
                   text-blue-600 dark:text-blue-400"
                                >
                                    <BookAIcon className="h-5 w-5" />
                                    <span className="text-sm font-medium">Article</span>
                                </Link>

                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
                   hover:bg-blue-50 dark:hover:bg-blue-900/30 
                   hover:shadow-sm active:scale-[0.98]
                   text-blue-600 dark:text-blue-400"
                                >
                                    <LayoutDashboardIcon className="h-5 w-5" />
                                    <span className="text-sm font-medium">Dashboard</span>
                                </Link>
                            </div>
                        </div>

                        {/* Optional decorative element */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
                    </div>
                )
            }


        </div>
    )
}

export default Navbar
