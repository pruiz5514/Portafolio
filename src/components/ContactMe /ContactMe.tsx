import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContacMe.scss'
import { useTranslations } from "next-intl";
import { IoMdMail } from 'react-icons/io';
import ContactMeForm from '../ContactMeForm/ContactMeForm';

const ContactMe = () => {
  const t = useTranslations('Contact');
  return (
    <section className="contact_me-section">
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