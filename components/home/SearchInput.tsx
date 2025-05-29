import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'

function SearchInput() {
    return (
        <div className='m-2 '>
            <form action={''}>
                <div className=' items-center border'>


                    <Input className='focus-visible:ring-1' placeholder='Search for your article..'></Input>
                </div>
            </form>

        </div>
    )
}

export default SearchInput
