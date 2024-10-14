import { useTranslations } from 'next-intl';
import './AboutMe.scss'
import Model from '../Model/Model';

const AboutMe = () => {
  const t = useTranslations('About');
  return (
    <section className='about-me_section'>
        <h1 className='about-me_title'>About me</h1>
        <div className='about-info_container'>
            <div className='about-text_container'>
                <p className='description_p'> {t("description1")}</p>
                <p className='description_p'> {t("description2")}</p>
            </div>
            <div className='about-model_container'>
                <Model/>
            </div>
            
        </div>
    </section>
  )
}

export default AboutMe