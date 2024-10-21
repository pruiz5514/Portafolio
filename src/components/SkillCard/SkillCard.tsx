import { ISkills } from '@/types/Iskills';
import './SkillCard.scss'

interface SkillCardProps {
    skill: ISkills; 
}

const SkillCard:React.FC<SkillCardProps>  = ({skill}) => {    
  return (
    <div className='skill_card-container'>
        <div className='logo-container'>
            <img className='logo-img' src={skill.img} alt={skill.name} />
        </div>
        <h2 className='skill-h2'>{skill.name}</h2>
    </div>
  )
}

export default SkillCard