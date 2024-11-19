'use client'
import { useTranslations } from 'next-intl';
import './AboutMe.scss'
import Model from '../Model/Model';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';

const AboutMe = () => {
  const t = useTranslations('About');
  
  useGSAP(() => {
    animateWithGsap('.about-me_title', {y:0, opacity:1})
    animateWithGsap('.about-text_container', {x:0, opacity:1, duration:2, ease: 'power2.inO'})
  },[])

  return (
    <section className='about-me_section'>
      <div className='about-me_container'>
        <h1 className='about-me_title'>{t('title')}</h1>
          <div className='about-info_container'>
              <div className='about-text_container'>
                  <p className='description_p'> {t("description1")}</p>
                  <p className='description_p'> {t("description2")}</p>
              </div>
              <div className='about-model_container'>
                  <Model/>
              </div>
              
          </div>
      </div>
        
    </section>
  )
}

export default AboutMe