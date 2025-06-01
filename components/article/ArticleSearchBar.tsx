'use client';
import React from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { searchInput } from '@/actions/searchInput';

const ArticleSearchBar = () => {
    const params = useSearchParams();

    return (
        <form action={searchInput}>

            <div className='relative max-w-2xl flex justify-center items-center mx-auto'>
                <Search className='absolute left-4'></Search>
                <Input name='search' defaultValue={params.get('search') as string} className='p-2 pl-12
            ' placeholder='Search for Blog '></Input>

            </div>
        </form>
    )
}

export default ArticleSearchBar
