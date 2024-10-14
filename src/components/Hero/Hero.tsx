'use client'
import { useGSAP } from '@gsap/react'
import './Hero.scss'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'

const Hero = () => {
    const t = useTranslations('Hero');

    useGSAP(()=>{
        gsap.to('#name', {opacity:1, delay:1.5});
        gsap.to('#frontend', {opacity:1,  delay:3})
    })
  return (
    <section className='hero-section'>
        <div className='hero-title'>
            <p id='name'>Pablo Ruiz</p>
            <p id='frontend'>{t("title")}</p>
        </div>
        <video autoPlay muted >
            <source src="video/stars.mp4" type="video/mp4" />
        </video>   
    </section>
  )
}

export default Hero