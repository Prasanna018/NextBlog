
'use server'

import { redirect } from "next/navigation";
import { fromTheme } from "tailwind-merge"

export const searchInput = async (formData: FormData) => {
    const searchText = formData.get('search');

    if (!searchText || typeof searchText !== "string") {
        redirect('/')

    }
    redirect(`/article/?search=${searchText}`)



}