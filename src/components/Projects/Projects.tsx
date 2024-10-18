// import { PinContainer } from '../PinContainer/3d-pin';
import { projects } from '@/data/data';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss'
import { useTranslations } from 'next-intl';
import { IProject } from '@/types/project';

const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <section className="projects-section">
      <h1 className='projects-h1'> {t('title')}</h1>

      <div>
        {projects.map((project:IProject) => (
          <ProjectCard key={project.name} project={project}/>
        ))}
        
      </div>
    </section>
  )
}

export default Projects