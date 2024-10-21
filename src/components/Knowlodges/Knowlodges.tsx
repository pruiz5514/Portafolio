'use client';

import { useTranslations } from 'next-intl';
import './Knowlodges.scss'
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';
import SkillCard from '../SkillCard/SkillCard';
import { skills } from '@/data/skills';
import { ISkills } from '@/types/Iskills';

const Knowlodges = () => {
  const t = useTranslations('Knowlodges');
  useGSAP(() => {
    animateWithGsap('.knowlodges-h1', {y:0, opacity:1});
    animateWithGsap('.skills-container', {y:0, opacity:1})
  },[])

  return (
    <section className='knowlodges-section'>
        <div className='knowlodges-container'>
            <h1 className='knowlodges-h1'> {t('title')} </h1>
            <div className='skills-container'>
                {skills.map((skill:ISkills)=>(
                    <SkillCard key={skill.name} skill={skill}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Knowlodges