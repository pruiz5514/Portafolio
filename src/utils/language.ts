'use server'
import { cookies } from "next/headers"

export const setLanguage = (lang:string)=> {
    cookies().set('language', lang);
}

export const  getLanguage = async()=>{
    const language = cookies().get('language')?.value;
    return language;
}