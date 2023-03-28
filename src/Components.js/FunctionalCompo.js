import React from 'react'
import './index.css';

const FunctionalCompo = () => {
  return (
    <div className='fun'>
      <h3>This is created using functional component</h3>
     <p>This is done using external css</p>
     <p style={{color:"blue"}}>This is done using inline css</p>
    </div>
  )
}

export default FunctionalCompo
