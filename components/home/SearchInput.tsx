'use client'
import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { searchInput } from '@/actions/searchInput'

function SearchInput() {
    const params = useSearchParams();

    return (
        <div className='m-2 '>
            <form action={searchInput}>
                <div className=' items-center border'>


                    <Input name='search' defaultValue={params.get('search') || ''} className='focus-visible:ring-1' placeholder='Search for your article..'></Input>
                </div>
            </form>

        </div>
    )
}

export default SearchInput
