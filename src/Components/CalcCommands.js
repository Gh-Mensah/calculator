import React, { Component } from 'react'
import './commandcalc.css'


class CalcCommands extends Component {
  render() {
    return (
      <div className='d-flex w-100 mx-auto border p-5 text-white bg-info' id='commandCont'>
        <div className='d-inline-flex flex-column flex-fill  me-2'>
        <span className='p-2 border w-100 text-center'>AC</span>
        </div>
        <div className='d-inline-flex flex-column flex-fill me-2'>
          <span className='p-2 border w-100 mb-2 text-center'>(</span>
          <span className='p-2 border w-100 mb-2 text-center'>7</span>
          <span className='p-2 border w-100 mb-2 text-center'>4</span>
          <span className='p-2 border w-100 mb-2 text-center'>1</span>
          <span className='p-2 border w-100  text-center'><sup>+</sup>/<sub>-</sub></span>
        </div>
        <div className='d-inline-flex flex-column flex-fill me-2'>
          <span className='p-2 border w-100 mb-2 text-center'>)</span>
          <span className='p-2 border w-100 mb-2 text-center'>8</span>
          <span className='p-2 border w-100 mb-2 text-center'>5</span>
          <span className='p-2 border w-100 mb-2 text-center'>2</span>
          <span className='p-2 border w-100  text-center'>0</span>
        </div>
        <div className='d-inline-flex flex-column  flex-fill me-2'>
          <span className='p-2 border w-100 mb-2 text-center'>%</span>
          <span className='p-2 border w-100 mb-2 text-center'>9</span>
          <span className='p-2 border w-100 mb-2 text-center'>6</span>
          <span className='p-2 border w-100 mb-2 text-center'>3</span>
          <span className='p-2 border w-100  text-center'>.</span>
        </div>
        <div className='d-inline-flex flex-column  flex-fill me-2'>
          <span className='p-2 border w-100 mb-2 text-center'>÷</span>
          <span className='p-2 border w-100 mb-2 text-center'>×</span>
          <span className='p-2 border w-100 mb-2 text-center'>-</span>
          <span className='p-2 border w-100 mb-2 text-center'>+</span>
          <span className='p-2 border w-100  text-center'>=</span>
        </div>
        <div className=' d-none d-md-inline-flex flex-column flex-fill '>
        <span className='p-2 border w-100 h-100  border text-center'></span>
        </div>
      </div>
    )
  }
}

export default CalcCommands