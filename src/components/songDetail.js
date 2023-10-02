import React from 'react'
import Ballon from '../assets/images/ballon.png'
import { useLayoutEffect,useState } from 'react';
import gsap from "gsap";
import Box from '../assets/images/musicIN.png'
import Star from '../assets/images/star.png'
import Emojis from '../assets/images/8864312.png'
import { nextStep } from '../components/redux/action';
import { useDispatch } from 'react-redux';
import { addData } from '../components/redux/action';
export default function SongDetail() {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".ballon",{ duration:6, ease: "elastic.out(1, 0.3)", y: -100});
          gsap.fromTo(".fstart", { scale: 0.5 },{scale:1,repeat:-1,duration:1});
        }, );
        
        return () => ctx.revert();
      }, []);
      function SubmitRadio() {
        var ele = document.getElementsByTagName('input');
        for ( let i = 0; i < ele.length; i++) {
            if (ele[i].type === "radio") {

                if (ele[i].checked) {
                    dispatch(addData(ele[i].name,ele[i].value))
                }
            }
        }
        dispatch(nextStep())

    }
  return (
    <div>
        <div className='imageConatiner'>
        <img src={Star} alt='' className='fstart' width={50}/>
        <img src={Box} alt=''  className='giftBox'/>
        <img src={Ballon} alt=''  className='ballon' width={50}/>
        </div>
        <div className='optionmainwrap'>
            <div className='songcard'>
                <h2>Mood</h2>
                <div className='allimagewrap'>
                <label className='songimgwrap'>
                   <input type='radio' value="happy" name="mood"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Happy</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="Romantic" name="mood"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Romantic</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="funny" name="mood"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Funny</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="Motivational" name="mood"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Motivational</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="Calm" name="mood"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Calm</p>
                   </div>
                </label>
                </div>
            </div>
            <div className='songcard'>
                <h2>Genre</h2>
                <div className='allimagewrap'>
                <label className='songimgwrap'>
                   <input type='radio' value="edm" name="Genre"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>EDM</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="desi" name="Genre"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Desi</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="pop" name="Genre"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Pop</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="Rap" name="Genre"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Rap</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="rock" name="Genre"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Rock</p>
                   </div>
                </label>
                </div>
            </div>
            <div className='songcard'>
                <h2>Singer's voice</h2>
                <div className='allimagewrap'>
                <label className='songimgwrap'>
                   <input type='radio' value="male" name="voice"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Male</p>
                   </div>
                </label>
                <label className='songimgwrap'>
                   <input type='radio' value="female" name="voice"/>
                   <div className='radio-btns'>
                    <img src={Emojis} alt=''/>
                    <p>Female</p>
                   </div>
                </label>
                </div>
            </div>
            <button style={{marginTop:"20px"}} onClick={()=>{SubmitRadio()}}>Proceed</button>
        </div>
       
    </div>
  )
}

