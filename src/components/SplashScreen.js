import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react';
import gsap from "gsap";
import cad from '../assets/images/cadbaurylanding.png'
import unit from '../assets/images/unit.png'
export default function SplashScreen() {
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".cadbaory", { 
      x: '-100%'},{
          x:"0%",
        opacity: 1, 
        duration: 2, 
        ease: 'power4.inOut', 
        stagger: 0.5,
      
    
    });
    gsap.fromTo(".heading", { 
      x: '100%'},{
          x:"0%",
        opacity: 1, 
        duration: 2, 
        ease: 'power4.inOut', 
        stagger: 0.5,
      
    
    });
    gsap.to(".splashwrap", { 
     opacity: 0, 
     duration: 2, 
     delay:1,
     ease: 'power4.inOut', 
     stagger: 0.5,
    });
    }, );
    
    return () => ctx.revert();
  }, []);

  return (
    <div className='splashwrap'>
     <img id='cad' className='cadbaory' src={cad} alt='cad'/>
     <img id='cad' className='heading'  src={unit} alt='unit'/>
    </div>
  )
}
