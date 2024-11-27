'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContacMe.scss'
import { useTranslations } from "next-intl";
import { IoMdMail } from 'react-icons/io';
import ContactMeForm from '../ContactMeForm/ContactMeForm';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';

const ContactMe = () => {
  const t = useTranslations('Contact');
  useGSAP(() => {
    animateWithGsap('.contact_me-h1', {y:0, opacity:1})
    animateWithGsap('.contact_me_text-container', {x:0, opacity:1, duration:1.8, ease: 'power2.inOut'})
    animateWithGsap('.contact_me_form-container', {x:0, opacity:1, duration:1.8, ease: 'power2.inOut'})
  },[])

  return (
    <section className="contact_me-section" id='contact'>
      <div className='contact_me-container'>
        <h1 className='contact_me-h1'> {t('title')}</h1>
        <div className='contact_me_info-container'>
          <div className='contact_me_text-container'>
            <h3 className='contact_me-h3'>{t("h3")}</h3>
            <p className='contact_me-p'>{t("contact-p1")}</p>
            <p className='contact_me-p'>{t("contact-p2")}</p>

            <ul className='social_media-ul'>
              <li><a target='blanck' href="https://www.linkedin.com/in/pablo-ruiz-arias-b0a832210/"><FaLinkedin/> Pablo Ruiz Arias</a></li>
              <li><a target='blanck' href="https://github.com/pruiz5514"><FaGithub />pruiz5514</a></li>
              <li><a href="mailto:pabloruiz.developer@gmail.com"><IoMdMail />pabloruiz.developer@gmail.com</a></li>
            </ul>
          </div>
          <div className='contact_me_form-container'>
            <h3 className='contact_me-h3'>{t("form-tilte")} </h3>
            <ContactMeForm/>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ContactMe