import './ContactMeForm.scss'
import Input from "../UI/Input/Input"
import { useTranslations } from 'next-intl';
import Textarea from '../UI/Textarea/Textarea';
import Button from '../UI/Button/Button';
import { FormEvent, useRef } from 'react';
import { sendEmail } from '@/utils/sendEmail';



const ContactMeForm = () => {
  const t = useTranslations('Input');

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (formRef.current) {
      sendEmail(formRef, 'service_l3jm3zs', 'template_oinxhem', '-jQ_5Wy3OBAmVX-3b');
      formRef.current.reset();
    }

  }
  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <Input placeholder={t("placeholder-name")} type="text" name="name" />
        <Input placeholder={t("placeholder-email")} type="email" name="email"/>
        <Textarea placeholder={t("textarea")} name="message"/>
        <Button>{t("button-text")} </Button>
    </form> 
  )
} 

export default ContactMeForm