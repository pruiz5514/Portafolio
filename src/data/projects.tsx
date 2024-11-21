'use client'
import { IProject } from "@/types/Iproject";
import { useTranslations } from "next-intl";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";



export const ProjectsArray: IProject[] = [
    {
        name: {
            en: 'Parking now',
            es: 'Parking now'
        },
        description : {
            en: 'Parking now',
            es: 'Parking now'
        },
        img : '/image/parking_now.png',
        urlWeb: 'https://parking-now.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/Parking-now',
        stacks: [<TbBrandNextjs key={'next'}/>, <SiTypescript key={'ts'} />, <FaCss3Alt key={'css'}/>, <SiStyledcomponents key={'styleComponent'}/>]
    },
    {
        name:{
            en: 'IPhone 15 website clone',
            es: 'Clon pagina del IPhone 15'
        },
        description : {
            en: 'IPhone 15 website clone',
            es: 'Clon de la pagina web del IPhone 15'
        },
        img : '/image/apple_clone.png',
        urlWeb: 'https://apple-clone-three-self.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/apple-clone',
        stacks: [<FaReact key={'react'} />, <IoLogoJavascript key={'js'}/>,<RiTailwindCssFill key={'tailwind'}/>, <TbBrandThreejs key={'three'}/>]
    },
    {
        name: {
            en: 'Jomchores',
            es : 'Jomchores'
        },
        description : {
            en: 'Page to publish home services',
            es: 'Pagina para publicar servicios del hogar'
        },
        img : '/image/apple_clone.png',
        urlWeb: 'https://apple-clone-three-self.vercel.app/',
        urlCode: 'https://github.com/nubenunca/Jomchores',
        stacks: [ <IoLogoJavascript key={'js'}/>,<FaSass key={'sass'}/>, <FaBootstrap key={'bootstrap'}/>]
    },
    {
        name: {
            en: 'Jobs Manager',
            es: 'Administrador de empleos'
        },
        description : {
            en: 'Platform for vacancy and company management',
            es: 'Plataforma para la gestión de vacantes y compañías.'
        },
        img : '/image/jobs_system.png',
        urlWeb: 'https://jobs-system.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/jobs-system',
        stacks: [<TbBrandNextjs key={'next'}/>, <SiTypescript key={'ts'}/>, <FaSass key={'sass'}/>]
    },
    {
        name: {
            en: 'Volunteering Manager',
            es: 'Administrador de voluntariados'
        },
        description : {
            en: 'Platform for projects and volunteers management',
            es: 'Plataforma para la gestión de proyectos y voluntarios.'
        },
        img : '/image/jobs_system.png',
        urlWeb: 'https://jobs-system.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/jobs-system',
        stacks: [<TbBrandNextjs key={'next'}/>, <SiTypescript key={'ts'}/>, <FaSass key={'sass'}/>, <RiTailwindCssFill key={'tailwind'}/>]
    },
    {
        name: {
            en: 'Medallo Barbershop',
            es: 'Medallo Barbershop'
        },
        description : {
            en: 'Platform for the management of a barbershop',
            es: 'Plataforma para la gestión de una barberia.'
        },
        img : '/image/jobs_system.png',
        urlWeb: 'https://jobs-system.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/jobs-system',
        stacks: [<TbBrandNextjs key={'next'}/>, <SiTypescript key={'ts'}/>, <FaSass key={'sass'}/>, <RiTailwindCssFill key={'tailwind'}/>]
    },
    
]