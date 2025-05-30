'use client';
import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BarChart, FileText, LayoutDashboardIcon, MessageCircle, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LeftSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant={'outline'} className="md:hidden m-4"><LayoutDashboardIcon className="h-5 w-5"></LayoutDashboardIcon></Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px]" >
                    <DashboardSideBar></DashboardSideBar>
                </SheetContent>
            </Sheet>

            <div className="hidden md:block h-screen w-[250px] border-r bg-background">
                <DashboardSideBar></DashboardSideBar>
            </div>
        </div>
    )
}


const DashboardSideBar = () => {

    return <div className="h-full px-4 py-6
    ">
        <div className="flex text-center items-center gap-2 mb-8 px-2">
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

        <nav>
            <Link href={'/dashboard'}>
                <Button
                    variant={'ghost'}
                    className="w-full justify-start ">
                    <LayoutDashboardIcon className="w-5 h-5 "></LayoutDashboardIcon>
                    Overview

                </Button>
            </Link>

            <Link href={'/dashboard/article/create'}>
                <Button
                    variant={'ghost'}
                    className="w-full justify-start 
                    ">
                    <FileText className="w-5 h-5"></FileText>
                    Article

                </Button>

            </Link>

            <Link href={'/article'}>
                <Button
                    variant={'ghost'}
                    className="w-full justify-start 
                    ">
                    <MessageCircle className="w-5 h-5"></MessageCircle>
                    Comments

                </Button>

            </Link>
            <Link href={'/article'}>
                <Button
                    variant={'ghost'}
                    className="w-full justify-start 
                    ">
                    <BarChart className="w-5 h-5"></BarChart>
                    Analytics

                </Button>

            </Link>

            <Link href={'/article'}>
                <Button
                    variant={'ghost'}
                    className="w-full justify-start 
                    ">
                    <Settings className="w-5 h-5"></Settings>
                    Settings

                </Button>

            </Link>
        </nav>


    </div >
}