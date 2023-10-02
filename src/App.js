import { useEffect, useState } from "react";
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import {ThreeCircles} from 'react-loader-spinner'
const SplashScreen = lazy (()=> import("./components/SplashScreen"))
const Form = lazy (()=> import("./components/form"))
const Frienddetails = lazy (()=> import("./components/frienddetails"))
const Header = lazy (()=> import("./components/header"))
const Musicmore = lazy (()=> import("./components/musicmore"))
const Hamburger = lazy (()=> import( "./components/nav"))
const SongDetail = lazy (()=> import("./components/songDetail"))
const Lyricsshow = lazy (()=> import("./components/lyricsshow"))



function App() {
     const [title,setTitle] = useState("")
     const [loader,setloader] = useState(true)
     const step = useSelector((state) => state.step.step);
      const Tittle = () => {
           switch(step){
            case 1 : 
                setTitle("")
                   break
                case 2 : 
                setTitle("Tell us about your loved one...") 
                   break
                   case 3 : 
                   setTitle("What would you like their song's vibe to be") 
                      break   
                      case 4 : 
                      setTitle("Tell us a little more about them....") 
                         break 
                         case 5 : 
                         setTitle("Your song's lyrics are ready!") 
                            break 
              default :
                  setTitle ("")  
           }
      } 
  useEffect(()=>{
      Tittle()
       setTimeout(()=>{
        setloader(false)
       },2000)
  },[step])

  return (
    <div className="DeviceWrap">
      <div className="blurBody" id="blr">
      
      </div>
      <Suspense fallback=
{<ThreeCircles
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
/>}>
       {
        loader  ?  <SplashScreen/> : <>
           <Hamburger/>
      <Header title={title} />

      {(() => {
        switch (step) {
          case 1:
            return (
              <Form/>
            )
            case 2:
              return (
                <Frienddetails/>
              )  
              case 3:
                return (
                  <SongDetail/>
                ) 
                case 4:
                  return (
                    <Musicmore/>
                  )  
                  case 5:
                    return (
                      <Lyricsshow/>
                    )   
            default:
              return <Form/>

        }
      }
      )
    ()}
        </>
       }
       </Suspense>
    
    </div>
  );
}

export default App;
