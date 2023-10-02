import React from 'react'
import Logo from '../assets/images/logo.png'
import Swal from 'sweetalert2'
export default function Hamburger() {
     function change(){
      const element = document.getElementById('hamburger')
        if(element.checked){
          document.body.style.overflowY = "hidden" 
          document.getElementsByTagName('html')[0].style.overflowY = "hidden"
          document.getElementById('blr').style.visibility = "visible"
        }
        else{
          document.body.style.overflow = "scroll"
          document.getElementsByTagName('html')[0].style.overflowY = "scroll"
          document.getElementById('blr').style.visibility = "hidden"
        }
     }

     function showPopup(Data){
        Swal.fire({
            title: `${Data}`,
            showCloseButton: true,
            showConfirmButton: false,
          })
     }

 

  return (
      
    <>
      <div class="navbar">
        
        <div class="container nav-container">
        <img src={Logo} alt='' className='logo'/>
            <input class="checkbox" onChange={()=>{change()}} type="checkbox" name="" id="hamburger" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
        
          <div class="menu-items">
            <li onClick={()=>{showPopup("This is of the Patticaptate Tutorial")}}>How to Participate</li>
            <li onClick={()=>{showPopup("This is for term and condition")}}>
            Terms & Condition
              </li>
            <li onClick={()=>{showPopup("This is Privacy Policy")}}>Privacy Policy</li>
            <li onClick={()=>{showPopup("This is for the Contact Us")}}>Contact Us</li>
          </div>
        </div>
      </div>
    </>
  )
}
