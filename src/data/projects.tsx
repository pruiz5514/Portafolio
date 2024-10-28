import { IProject } from "@/types/Iproject";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";

export const projects: IProject[] = [
    {
        name: 'Parking now',
        description : 'Pagina para la reserva de parqueaderos',
        img : '/image/parking_now.png',
        urlWeb: 'https://parking-now.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/Parking-now',
        stacks: [<TbBrandNextjs key={'next'}/>, <SiTypescript key={'ts'} />, <FaCss3Alt key={'css'}/>, <SiStyledcomponents key={'styleComponent'}/>]
    },
    {
        name: 'IPhone 15 website clone',
        description : 'Clone de la pagina del IPhone 15',
        img : '/image/apple_clone.png',
        urlWeb: 'https://apple-clone-three-self.vercel.app/',
        urlCode: 'https://github.com/pruiz5514/apple-clone',
        stacks: [<FaReact key={'react'} />, <IoLogoJavascript key={'js'}/>,<RiTailwindCssFill key={'tailwind'}/>, <TbBrandThreejs key={'three'}/>]
    },
    {
        name: 'Jomchores',
        description : 'Clone de la pagina del IPhone 15',
        img : '/image/apple_clone.png',
        urlWeb: 'https://apple-clone-three-self.vercel.app/',
        urlCode: 'https://github.com/nubenunca/Jomchores',
        stacks: [ <IoLogoJavascript key={'js'}/>,<FaSass key={'sass'}/>, <FaBootstrap key={'bootstrap'}/>]
    },
    {
        name: 'Ticketswap clone',
        description : 'Pagina para la reserva de parqueaderos',
        img : '/image/ticketswap_clone.png',
        urlWeb: 'https://pruiz5514.github.io/',
        urlCode: 'https://github.com/pruiz5514/Ticketswap-clone',
        stacks: [<FaHtml5 key={'HMTL'}/>,  <FaCss3Alt key={'css'}/>]
    },
    
]