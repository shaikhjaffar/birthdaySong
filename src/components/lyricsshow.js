import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {ThreeCircles} from 'react-loader-spinner'
const {Configuration, OpenAIApi } = require("openai")

export default function Lyricsshow() {
    const newData=useSelector((state) => state.data) 
    const [lyrics,setlyrics] = useState("")
     const [loading,setloading] = useState(false)
    const configuration = new Configuration({
        organization:"org-xzP3E8DHXHjYE65Dp9VtgdLY",
        apiKey:'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'
    })
    const openai = new OpenAIApi(configuration);
function handleSubmit (){
        setloading(true)
        openai.createCompletion( {
            model:"text-davinci-003",
            prompt: `Wish a happy birthday to ${newData.firendName}
            His/Her/Their pet name is ${newData.firendName}.
            ${newData.angry}makes him/her/them angry.
            ${newData.funny} makes him/her/them funniest.
            ${newData.smile} makes him/her/them special.
            ${newData.movie} movie He/she/they likes/like the most.
            ${newData.sport} sports He/she/they likes/like the most.
            Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
            Using the above information about  ${newData.firendName}, please write 16 lines of  ${newData.Genre} lyrics that I can dedicate to him/her/them for his/her/their birthday. Each line can have maximum of 8 words or 40 characters.
            The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.`,
            max_tokens: 500,
          })
          .then((response)=>{
                setlyrics(`${response.data.choices[0].text}`)
                console.log(`${response.data.choices[0].text}`)
                 setloading(false)
            
          })
          .catch((err)=>{
              alert(err.message) 
              setloading(false)
          })
      }
     useEffect(()=>{
           handleSubmit()
     },[1])
  return (
    <>
     {
        loading ?      <ThreeCircles
        height="100"
        width="100"
        color="#e7b363"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      /> : <>
         <div className='answerDiv'>
        <p>{lyrics}</p>
    </div>
    <div className='btnwrap'>
    <button style={{backgroundColor:"#a527ff"}}>Recreate Lyrics</button>
     <button>Create Song</button>
    </div>
      </>
     }

  
    </>
    
  )
}
