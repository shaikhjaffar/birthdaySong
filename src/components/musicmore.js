import React, { useEffect } from 'react'
import { useLayoutEffect,useState } from 'react';
import Ballon from '../assets/images/ballon.png'
import gsap from "gsap";
import Box from '../assets/images/Object.png'
import Star from '../assets/images/star.png'
import Emojis from '../assets/images/8864312.png'
import { addData, nextStep } from '../components/redux/action';
import { useDispatch } from 'react-redux';

export default function Musicmore() {
     const[more,setmore] = useState(false)
     const dispatch = useDispatch();
 

function SubmitMusicDetail () {
       const alltext = document.querySelectorAll('#musc input')
         for (let i=0;i<alltext.length;i++){
            
                 console.log("woking")
                dispatch(addData(alltext[i].id,alltext[i].value))
              
         } 
         dispatch(nextStep());
       

}

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".ballon",{ duration:6, ease: "elastic.out(1, 0.3)", y: -100});
          gsap.fromTo(".fstart", { scale: 0.5 },{scale:1,repeat:-1,duration:1});
        }, );
        
        return () => ctx.revert();
      }, []);
       useEffect(()=>{
     
       },[more])
  return (
    <div>
          <div className='imageConatiner'>
        <img src={Star} alt='' className='fstart' width={50}/>
        <img src={Box} alt=''  loading='lazy' className='giftBox'/>
        <img src={Ballon} alt=''  className='ballon' width={50}/>
        </div>
        <div className='formMainWrap collumnCenter'>
      <form id='musc' className='musicMoreForm'>
         <label className='boldlabel' htmlFor='petname'  >What's your pet name for them?</label>
        <input className='input' id='petname' placeholder='xxxxxxx' type='text'/>

        <label className='boldlabel' htmlFor='angry'  >What makes them angry?</label>
        <input className='input' id='angry' placeholder='xxxxxxx' type='text'/>

        <label className='boldlabel' htmlFor='funny'  >What is the funniest thing they do?</label>
        <input className='input' id='funny' placeholder='xxxxxxx' type='text'/>

        {
            more ?  <>
              <label className='boldlabel' htmlFor='smile'  >What makes them smile?</label>
        <input className='input' id='smile' placeholder='xxxxxxx' type='text'/>
        <label className='boldlabel' htmlFor='movie'  >What is their favorite movie?</label>
        <input className='input' id='movie' placeholder='xxxxxxx' type='text'/>
        <label className='boldlabel' htmlFor='sport'  >Their favorite sport.</label>
        <input className='input' id='sport' placeholder='xxxxxxx' type='text'/>
            
            </> : <></>
        }
       
       
      </form>
      <div className='btnwrap'>
    <button id='anser' onClick={()=>{setmore(true)
         const btn =  document.getElementById('anser') 
          btn.disabled  = true
       const element =  document.getElementById('musc')  
        setTimeout(()=>{
            element.scroll({
                top: 100,
                behavior: 'smooth'
              });
        },10)
       
    }
     
        
    }  >Answer More</button>
     <button onClick={()=>{SubmitMusicDetail()}}>Proceed</button>
    </div>
    </div>
  
    </div>
  )
}
