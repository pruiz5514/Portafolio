import { setLanguage } from '../../../utils/language';
import {useTranslations} from 'next-intl';
import './MenuList.scss'

const MenuList = () => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    const lang = event.target.value;
    setLanguage(lang);
  } 
  const t = useTranslations('Header');

  return (
    <ul>
        <li>{t('home')}</li>
        <li>{t('knowlodges')}</li>
        <li>{t('projects')}</li>
        <li>{t('contact')}</li>
        <li>
            <select className='language-select' onChange={handleSelect}>
                <option value="en"> English</option>
                <option value="es"> Español </option>
            </select>
        </li>
    </ul>
  )
}

export default MenuList