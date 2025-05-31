'use client';
import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css';
import { Button } from '../ui/button';
import { createPost } from '@/actions/create-post';
import type { Article } from '@prisma/client';
import Image from 'next/image';
import { editPost } from '@/actions/edit-post';
import { error } from 'console';



const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

type EditArticleProp = {
    article: Article;
}

const EditArticle: React.FC<EditArticleProp> = ({ article }) => {
    const [content, setContent] = useState(article.content);
    const [formState, action, isPending] = useActionState(editPost.bind(null, article.id), { errors: {} })
    console.log(article)
    console.log(article.title)
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
                                    defaultValue={article.title}
                                    type='text' placeholder='Post Title'></Input>

                                {formState.errors.title && <span className='text-red-700'>{formState.errors.title}</span>}
                            </div>
                            <div className='space-y-2 w-full'>
                                <Label>Category</Label>
                                <select defaultValue={article.category} className='p-1 w-full' name='category' id='category'>
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

                                {
                                    article.featuredImage && (
                                        <Image
                                            src={article.featuredImage}


                                            alt={article.title}
                                            height={200}
                                            width={200}
                                            className='p-1 object-cover'
                                        ></Image>

                                    )
                                }



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
                                isPending ? 'Editing..' : "Edit Post"
                            }</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default EditArticle
