import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: string | HTMLElement, 
  animationProps: gsap.TweenVars,
//   scrollProps: Partial<ScrollTrigger> 
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target, 
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
    //   ...scrollProps,
    },
  });
};
