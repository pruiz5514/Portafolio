'use client'
import { RxHamburgerMenu } from 'react-icons/rx'
import './Header.scss'
import Image from 'next/image'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [aside, setAside] = useState(false);

  const openAside = ()=>{
    setAside(true);
  }  

  const closeAside = ()=> {
    setAside(false);
  }

  return (
    <header>
        <nav>
            <Image src='/image/logo.png' alt='logo' width={120} height={2000} />
            <ul>
                <li>Home</li>
                <li>Conocimientos</li>
                <li>Proyectos</li>
                <li>Contacto</li>
                <li>
                    <select className='language-select'>
                        <option value="english"> English</option>
                        <option value="spanish"> Español </option>
                    </select>
                </li>
            </ul>
            <button onClick={openAside}> <RxHamburgerMenu className='burger-icon'/> </button>
            {aside === true ? (
                <div className='aside-container'>
                    <aside>
                        
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