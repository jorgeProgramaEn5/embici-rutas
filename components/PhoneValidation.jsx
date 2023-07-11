'use client'
import React from 'react'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

export function PhoneValidation() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value))
    }

    const validatePhoneNumber = (phoneNumber)=>{
        const phoneNumberPattern = /^\d{7,}$/;
        return phoneNumberPattern.test(phoneNumber); 
    }


  return (
    <div className='flex w-full flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center  w-[45%] overflow-x-hidden'>
        <label htmlFor="phoneNumber">Phone Number</label>
        <PhoneInput country={'us'} value={phoneNumber} onChange={handleChange} inputProps={{require: 'true'}}/>
        { !valid && <p>enter a valid number</p>}
        </div>
    </div>
  )
}
