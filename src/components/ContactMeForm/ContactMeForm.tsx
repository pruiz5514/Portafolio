import './ContactMeForm.scss'
import Input from "../UI/Input/Input"
import { useTranslations } from 'next-intl';
import Textarea from '../UI/Textarea/Textarea';
import Button from '../UI/Button/Button';

const ContactMeForm = () => {
  const t = useTranslations('Input');
  return (
    <form className="contact-form">
        <Input placeholder={t("placeholder-name")} type="text" name="name"/>
        <Input placeholder={t("placeholder-email")} type="email" name="email"/>
        <Textarea placeholder={t("textarea")} name="message"/>
        <Button>{t("button-text")} </Button>
    </form>
  )
} 

export default ContactMeForm