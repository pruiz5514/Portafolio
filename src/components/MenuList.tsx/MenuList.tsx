import { getLanguage, setLanguage } from '../../utils/language';
import {useTranslations} from 'next-intl';
import './MenuList.scss'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const MenuList = () => {
  const [language, setLanguageState] = useState('');

  useEffect(()=>{
    const fetchLanguage = async () =>{
        const lang = await getLanguage() ; 
        setLanguageState(String(lang))
    }
    fetchLanguage()
  },[]);
  
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    const lang = event.target.value;
    setLanguage(lang);
    setLanguageState(lang)
    sessionStorage.setItem('lang', lang)
  } 
  const t = useTranslations('Header');

  return (
    <ul>
        <li><Link href={'/#about-me'} >{t('home')}</Link></li>
        <li><Link href={'/#knowlodge'}>{t('knowlodges')}</Link></li>
        <li><Link href={'/#projects'}>{t('projects')}</Link></li>
        <li><Link href={'/#contact'}>{t('contact')}</Link></li>
        <li>
            <select className='language-select' onChange={handleSelect} value={language}>
                <option value="en"> English</option>
                <option value="es"> Español </option>
            </select>
        </li>
    </ul>
  )
}

export default MenuList