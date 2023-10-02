import React, { useState } from 'react';

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleInput = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if a number is entered and it's not the last input
    if (/[0-9]/.test(value) && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    // Move to the previous input box if Backspace is pressed and the input is empty
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      // Move focus to the previous input
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div className='otp-field'>
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={value}
          maxLength="1"
          onChange={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
        />
        
      ))}
    </div>
  );
};

export default OTPInput;
