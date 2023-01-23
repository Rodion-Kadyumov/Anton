import React, { useState } from 'react';
import '../Inputs/Input.css'

function Input({ title, description}) {
  const [count, setCount] = useState(0)
  function chengeValue () {
    setCount(count + 1)
  }
  
  return (
    <label className="input">
      <input onChange={chengeValue} type='radio' className='input-radio' name='1' value={1}/>
      <span className="input-title">{title}</span>
      <span className="input-description">{description}</span>
    </label>
  );
}

export default Input;