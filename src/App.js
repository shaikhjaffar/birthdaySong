import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Form from "./components/form";
import Frienddetails from "./components/frienddetails";
import Header from "./components/header";
import Musicmore from "./components/musicmore";
import Hamburger from "./components/nav";
import SongDetail from "./components/songDetail";
import Lyricsshow from "./components/lyricsshow";
import { useSelector } from 'react-redux';


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
      
    
    </div>
  );
}

export default App;
