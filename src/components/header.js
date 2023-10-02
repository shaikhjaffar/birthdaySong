import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
export default function Header({title}) {
    const step = useSelector((state) => state.step.step);
    useEffect(()=>{
          const allCircle = document.querySelectorAll('.progreeswrap .circle') 
          allCircle[step-1].classList.add("live")
          for (let i =0 ; i < step-1;i++){
            allCircle[i].classList.add("active")
          }
    },[step])

  return (
    <div>
        <div className='progreeswrap'>
         <span className='circle'></span>
         <span className='circle'></span>
         <span className='circle'></span>
         <span className='circle'></span>
         <span className='circle'></span>
         <span className='circle'></span>
        </div>
        <h4>{title}</h4>
    </div>
  )
}
