'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


const BlogDashboardSkeleton = () => {
    return (
        <div className="flex-1 p-4 md:p-8 animate-pulse">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48 bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-64 bg-gray-200 dark:bg-gray-700" />
                </div>
                <Skeleton className="h-10 w-32 bg-gray-300 dark:bg-gray-600" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {['Total Articles', 'Total Comments', 'AVG. Reading'].map((title, i) => (
                    <Card key={i} className="border-gray-200 dark:border-gray-700">
                        <CardHeader className="flex flex-row justify-between items-center pb-2">
                            <Skeleton className="h-6 w-32 bg-gray-200 dark:bg-gray-700" />
                            <Skeleton className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-8 w-16 mb-2 bg-gray-300 dark:bg-gray-600" />
                            <div className="flex items-center">
                                <Skeleton className="h-3 w-3 mr-1 rounded-full bg-green-400" />
                                <Skeleton className="h-3 w-24 bg-gray-200 dark:bg-gray-700" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Articles Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-7 w-48 bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
                </div>

                {/* Loading Articles Text Animation */}
                <div className="flex items-center justify-center py-8">
                    <div className="flex space-x-2">
                        {['L', 'o', 'a', 'd', 'i', 'n', 'g', ' ', 'a', 'r', 't', 'i', 'c', 'l', 'e', 's', '.'].map((char, i) => (
                            <div
                                key={i}
                                className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded-full"
                                style={{
                                    animation: `bounce 1.5s infinite ${i * 0.1}s`,
                                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
                                }}
                            >
                                <span className="sr-only">{char}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Articles List */}
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <Card key={i} className="border-gray-200 dark:border-gray-700">
                            <div className="flex items-center p-4 space-x-4">
                                <Skeleton className="h-12 w-12 rounded-md bg-gray-300 dark:bg-gray-600" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600" />
                                    <div className="flex space-x-2">
                                        <Skeleton className="h-4 w-16 bg-gray-200 dark:bg-gray-700" />
                                        <Skeleton className="h-4 w-24 bg-gray-200 dark:bg-gray-700" />
                                    </div>
                                </div>
                                <Skeleton className="h-8 w-20 bg-gray-300 dark:bg-gray-600" />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CSS for bounce animation */}
            <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
        </div>
    )
}

export default BlogDashboardSkeleton