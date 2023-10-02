import React from 'react';
import OTPInput from './Otp';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { nextStep } from '../components/redux/action';


export default function OtpModal({ isOpen, onRequestClose}) {
    const dispatch = useDispatch();

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          ariaHideApp={false}
        >
            <h1>Enter OTP</h1>
      <OTPInput length={4} />
       <p>Resend OTP</p>
      <button onClick={()=>{dispatch(nextStep())}}>Submit</button>
        </Modal>
      );
     
}
