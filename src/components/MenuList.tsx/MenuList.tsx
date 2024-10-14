import { getLanguage, setLanguage } from '../../../utils/language';
import {useTranslations} from 'next-intl';
import './MenuList.scss'
import { useEffect, useState } from 'react';

const MenuList = () => {
  const [language, setLanguageState] = useState('');

  useEffect(()=>{
    const fetchLanguage = async () =>{
        let lang = await getLanguage() ; 
        setLanguageState(String(lang))
    }
    fetchLanguage()
  },[]);

  console.log(language);
  
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    const lang = event.target.value;
    setLanguage(lang);
    setLanguageState(lang)
  } 
  const t = useTranslations('Header');

  return (
    <ul>
        <li>{t('home')}</li>
        <li>{t('knowlodges')}</li>
        <li>{t('projects')}</li>
        <li>{t('contact')}</li>
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