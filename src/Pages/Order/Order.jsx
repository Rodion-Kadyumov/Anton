import React, { useState, useRef } from 'react';
import '../Order/Order.css'

function Order () {
  const inputDescription = useRef(null)
  const [text, setText] = useState([
    {
      description:''
    }
  ])
  const handleCreateRequest = () => {
    setText([
      ...text,
      {
        description: inputDescription.current.value
      }
    ])
    inputDescription.current.value = ''
  }
  
  return (
    <div className='training'>
      <div className='text'>
        <textarea className='text-block__input' ref={inputDescription} type="text" />
      </div>
            
      

      <div className='data'>
      <div className='data-card'>
          {text.map((text, key) => {
            return (
              <div key={key} className=''>
                <p>{text.description}</p>
          </div>
            )
          })}
        </div>
      </div>

        <button onClick={handleCreateRequest} className='text-block__btn'>Добавить</button>      
    </div>
  );
}

  export default Order;