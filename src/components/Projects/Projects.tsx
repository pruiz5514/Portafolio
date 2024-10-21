'use client'
// import { PinContainer } from '../PinContainer/3d-pin';
import { projects } from '@/data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
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

const Projects = () => {
  const t = useTranslations('Projects');
  useGSAP(() => {
    animateWithGsap('.projects-h1', {y:0, opacity:1})
    animateWithGsap('.about-text_container', {y:0, opacity:1, duration:1, ease: 'power2.inOut'})
  },[])

  return (
    <section className="projects-section">
      <div className='projects-container'>
        <h1 className='projects-h1'> {t('title')}</h1>

        <div>
          {projects.map((project:IProject) => (
            <Card3D key={project.name} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                    src='/image/parking_now.png'
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.name}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white  "
                  >
                    <Link target='blanck' href={project.urlCode} className='flex items-center gap-x-2'><FaGithub/> {t("code")}</Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <Link target='blanck' href={project.urlWeb}  className='flex items-center gap-x-2'><TbWorldWww className='text-2xl'/>{t("page")}</Link>
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