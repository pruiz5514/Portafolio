'use client'
import { RxHamburgerMenu } from 'react-icons/rx'
import './Header.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import MenuList from '../MenuList.tsx/MenuList'

const Header = () => {
  const [aside, setAside] = useState(false);

  const openAside = ()=>{
    setAside(true);
  }  

  const closeAside = ()=> {
    setAside(false);
  }

  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass('scrolled'); 
      } else {
        setHeaderClass(''); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <header className={headerClass}>
        <nav>
            <Image src='/image/logo.png' alt='logo' width={120} height={2000} />
            <div className='menu-desktop'>
                <MenuList/>
            </div>

            <button onClick={openAside}> <RxHamburgerMenu className='burger-icon'/> </button>
            {aside  ? (
                <div className='aside-container'>
                    <aside>
                        <MenuList/>
                        <button className='close-button' onClick={closeAside}> <IoClose /> </button>
                    </aside>
                    <div onClick={closeAside} className='left-aside-section'/>
                </div>
            ): ''}
            
            
        </nav>
    </header>
  )
}

export default Header