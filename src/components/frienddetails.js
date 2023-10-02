import React, { useEffect } from 'react'
import Ballon from '../assets/images/ballon.png'
import { useLayoutEffect,useState } from 'react';
import gsap from "gsap";
import Box from '../assets/images/gift.png'
import { useDispatch } from 'react-redux';
import { nextStep } from '../components/redux/action';
import { addData } from '../components/redux/action';
import Star from '../assets/images/star.png'
export default function Frienddetails() {
     const [age,setage] = useState(1)
     const dispatch = useDispatch();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".ballon",{ duration:6, ease: "elastic.out(1, 0.3)", y: -100});
          gsap.fromTo(".fstart", { scale: 0.5 },{scale:1,repeat:-1,duration:1});
        }, );
        
        return () => ctx.revert();
      }, []);
       useEffect(()=>{

       },[age])
     function Submit () {
        const name = document.getElementById("name").value
        const age1 = `${age} years`
        const gender = document.getElementById("gender").value
        dispatch(addData("firendName",name))
        dispatch(addData("age",age1))
        dispatch(addData("gender",gender))
        dispatch(nextStep())
     } 

  return (
     <div>
       
        <div className='imageConatiner'>
        <img src={Star} alt='' className='fstart' width={50}/>
        <img src={Box} alt=''  loading='lazy' className='giftBox'/>
        <img src={Ballon} alt=''  className='ballon' width={50}/>
        </div>
        <div className='formMainWrap collumnCenter'>
      <form>
         <label className='boldlabel' htmlFor='name'  >Their name</label>
        <input className='input' id='name' placeholder='Enter the name' type='text'/>
        <label htmlFor='age' className='boldlabel' >How old they'll be this birthday</label>
         <div className='input'>
            <span>{age}</span>
            <span> Years</span>
            <div className='arrowWarp'>
                <span style={{width:"40px"}} onClick={()=> setage(age + 1)}>
                <span className='arrow arrowup' ></span>
                </span>
              <span style={{width:"40px"}} onClick={()=> age > 0 ?  setage(age -1) : setage(0)}>
              <span className='arrow arrowdown'></span>

              </span>
            </div>

         </div>
    
        <label htmlFor='gender' className='boldlabel'>Gender</label>
        <select   id='gender'>
            <option>Male</option>
            <option>Female</option>
            <option>others</option>
        </select>
        <button style={{marginTop:"20px"}} onClick={()=>{Submit()}}>Proceed</button>
      </form>
    </div>
    
     </div>
  )
}
