import React from 'react'
import './style.css'

export default function Input({type, placeholder, onChange, maxLength, customClass}) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} maxLength={maxLength} className={customClass}/>
  );
}

