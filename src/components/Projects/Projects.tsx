'use client'
// import { PinContainer } from '../PinContainer/3d-pin';
import { projects } from '@/data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss'
import { useTranslations } from 'next-intl';
import { IProject } from '@/types/Iproject';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';

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

        `<div>
          {projects.map((project:IProject) => (
            <ProjectCard key={project.name} project={project}/>
          ))}
          
        </div>`
      </div>
      
    </section>
  )
}

export default Projects