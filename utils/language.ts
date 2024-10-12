'use server'
import { cookies } from "next/headers"

export const setLanguage = (lang:string)=> {
    cookies().set('language', lang);
}