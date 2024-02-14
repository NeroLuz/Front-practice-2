import React from 'react'
import { useState } from 'react'
import "./Toggle.css"

const Toggle = () => {

  const [toggle, setToggle] = useState(true)

  const togglePrices = () => {
    setToggle(!toggle)
    console.log(toggle);
  }
    
  return (
    <label className="switch">
        <input id="button" type="checkbox" onClick={togglePrices}/>
        <span className="slider round"></span>
    </label>
  )
}

export default Toggle