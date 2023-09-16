import React from 'react'
import './style.css'
import {BiSearch} from "react-icons/bi"

export default function InputSearch({onChange}) {
  return (
    <div className='container_search'>
        <BiSearch/>
        <input type="text" placeholder="Pesquisar" onChange={onChange} className="search"/> 
    </div>
     );
}
