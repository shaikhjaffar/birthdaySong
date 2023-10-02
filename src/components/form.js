import React from 'react'
import { useLayoutEffect,useState } from 'react';
import gsap from "gsap";
import Tune from '../assets/images/tune.png'
import Box from '../assets/images/boxall.png'
import Star from '../assets/images/star.png'

import OtpModal from './otpModal';
export default function Form() {

     function handleSubmit(event){
        event.preventDefault()
        function checkInput(){
            const allInput = document.querySelectorAll('form .input')
            for(let i=0;i< allInput.length;i++){
               if(allInput[i].value === ""){
                   alert(`Enter ${allInput[i].placeholder}`) 
                   return
               }
            }
            openModal()
         }
       checkInput()
        
     }

     const [modalIsOpen, setModalIsOpen] = useState(false);

     const openModal = () => {
       setModalIsOpen(true);
     };
   
     const closeModal = () => {
       setModalIsOpen(false);
     };
   



    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.to(".tune", { rotation: 360 ,repeat:-1,duration:2});
          gsap.fromTo(".star", { scale: 0.5 },{scale:1,repeat:-1,duration:1});
        }, );
        
        return () => ctx.revert();
      }, []);
  return (
    <div className='fromwrap'>
    <img src={Box} className='landingBox' alt='box' />
    <div className='formMainWrap collumnCenter'>
      <h3>Register to create</h3>
      <img  className='star' width={80} src={Star}/>
      <form>
        <input className='input' placeholder='Phone Number' type='tel' maxLength={10} minLength={10}/>
        <input className='input' placeholder='Full Name' type='text' />
        <input className='input' placeholder='Email ID' type='email'/>
       
        <div class="styled-input-single">
        <input type="checkbox" name="fieldset-1" id="radio-example-one" />
        <label for="radio-example-one">I accept Term & Condition and Privacy Policy of Mondelez(Cadburay)</label>
      </div>
      <div class="styled-input-single">
        <input type="checkbox" name="fieldset-1" id="radio-example-two" />
        <label for="radio-example-two">I would like to receive promotional communication from Mondelez(Cadbury) about its product and offers</label>
      </div>
        <button onClick={(e)=>{handleSubmit(e)}} >Submit</button>
      </form>
     <img  className='tune' width={30} src={Tune}/>
    
    </div>
    <OtpModal isOpen={modalIsOpen} onRequestClose={closeModal}>

    </OtpModal>
    </div>
  )
}
