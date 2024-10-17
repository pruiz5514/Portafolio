import './Projects.scss'
import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <section className="projects-section">
      <h1 className='projects-h1'> {t('title')}</h1>
    </section>
  )
}

export default Projects