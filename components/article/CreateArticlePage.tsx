'use client';
import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css';
import { Button } from '../ui/button';
import { createPost } from '@/actions/create-post';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

const CreateArticlePage = () => {
    const [content, setContent] = useState("..");
    const [formState, action, isPending] = useActionState(createPost, { errors: {} })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('content', content);

        startTransition(() => {
            action(formData);
        })
        console.log(formData)

    }
    console.log(formState);
    return (
        <div className='max-w-4xl mx-auto p-6'>

            <Card>
                <CardHeader>
                    <CardTitle className='text-center font-bold text-2xl'>Create New Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <Input
                                    name='title'
                                    type='text' placeholder='Post Title'></Input>

                                {formState.errors.title && <span className='text-red-700'>{formState.errors.title}</span>}
                            </div>
                            <div className='space-y-2 w-full'>
                                <Label>Category</Label>
                                <select defaultValue={''} className='p-1 w-full' name='category' id='category'>
                                    <option value={''}>
                                        select options
                                    </option>

                                    <option value={'web-developement'}>
                                        Web develeopemnt
                                    </option>
                                    <option value={'techanology'}>
                                        techanology
                                    </option>
                                    <option value={'science'}>
                                        science
                                    </option>

                                </select>
                                {formState.errors.category && <span className='text-red-700'>{formState.errors.category}</span>}

                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='featuredImage'>Featured Image</Label>
                                <Input
                                    id='featuredImage'
                                    name='featuredImage'
                                    accept='image/*'
                                    type='file'
                                ></Input>

                                {formState.errors.featuredImage && <span>{formState.errors.featuredImage[0]}</span>}
                            </div>

                            <div className='space-y-2'>
                                <Label>Content</Label>
                                <ReactQuill

                                    theme='snow'

                                    value={content}
                                    onChange={setContent}
                                >

                                </ReactQuill>

                                {formState.errors.content && <span className='text-red-700'>
                                    {formState.errors.content[0]}</span>}
                            </div>


                        </div>
                        <div className='flex gap-2 justify-end mt-4'>
                            <Button variant={'outline'} >Cancle</Button>
                            <Button disabled={isPending} type='submit'>{
                                isPending ? 'Publishing' : "Publish"
                            }</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateArticlePage
