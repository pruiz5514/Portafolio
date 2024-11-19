// import { FaGithub } from 'react-icons/fa'
// import Button from '../UI/Button/Button'
// import './ProjectCard.scss'
// import { TbWorldWww } from 'react-icons/tb'
// import { IProject } from '@/types/Iproject'
// import Link from 'next/link'

// interface CardProps {
//     project: IProject; 
// }

// const ProjectCard :React.FC<CardProps>  = ({project}) => {
//   const {name,description, img, urlWeb, urlCode} = project;

//   return (
//     <article className='card-container'>
//         <div className='card_img-container'>        
//             <img className='card-img' src={img}  alt="img" />
//         </div>
//         <div className='card_text-container'>
//             <h3 className='card-h3'>{name}</h3>
//             <p className='card-p'>{description}</p>
//         </div>
//         <div className='card_button-container'>
//                 <div className='card_code-button'>
//                    <Link target='blanck' href={urlCode}><Button> <FaGithub className='text-2xl'/> Ver codigo </Button></Link> 
//                 </div>
//                 <div className='card_web-button'>
//                    <Link target='blanck' href={urlWeb}><Button><TbWorldWww className='text-2xl'/> Ver pagina  </Button></Link> 
//                 </div>
//         </div>
//     </article>
//   )
// }

// export default ProjectCard