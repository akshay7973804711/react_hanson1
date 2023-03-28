import React, { Component } from 'react'
import './index.css';
export class ClassCompo extends Component {
  render() {
    return (
      <div className='classcom'>
      <h3>This is created using class component</h3>
     <p>This is done using external css</p>
     <p style={{color:"blue"}}>This is done using inline css</p>
    </div>
    )
  }
}

export default ClassCompo
