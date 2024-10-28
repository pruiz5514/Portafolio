'use client'
// import { PinContainer } from '../PinContainer/3d-pin';

import './Projects.scss'
import { useTranslations } from 'next-intl';
import { IProject } from '@/types/Iproject';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';
import { Card3D, CardBody, CardItem } from '../Card3D/Card3D';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { projects } from '@/data/projects';

const Projects = () => {
  const t = useTranslations('Projects');
  useGSAP(() => {
    animateWithGsap('.projects-h1', {y:0, opacity:1})
    animateWithGsap('.about-text_container', {y:0, opacity:1, duration:1, ease: 'power2.inOut'})
    animateWithGsap('.projects_cards-container', {y:0, opacity:1})
  },[])

  return (
    <section className="projects-section">
      <div className='projects-container'>
        <h1 className='projects-h1'> {t('title')}</h1>

        <div className='projects_cards-container'>
          {projects.map((project:IProject) => (
            <Card3D key={project.name} className="inter-var">
              <CardBody className="bg-cardGray relative group/card  border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-3xl font-bold text-white"
                >
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-base max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={project.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.name}
                  />
                </CardItem>
                <CardItem 
                  translateZ="50"
                  className= 'flex text-4xl py-8 text-white gap-7 w-full justify-center'
                >
                  {project.stacks.map(stack => stack)} 

                </CardItem>
                <div className="flex justify-between items-center mt-2">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-base font-normal text-white  "
                  >
                    <Link target='blanck' href={project.urlCode} className='flex items-center gap-x-2'><FaGithub className='text-xl'/> {t("code")}</Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-darkGray text-white text-base font-bold"
                  >
                    <Link target='blanck' href={project.urlWeb}  className='flex items-center gap-x-2'><TbWorldWww className='text-xl'/>{t("page")}</Link>
                  </CardItem>
                </div>
              </CardBody>
            </Card3D>
          ))}
          
        </div>
      </div>
      
    </section>
  )
}

export default Projects