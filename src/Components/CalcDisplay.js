import React from 'react'
import './displaycal.css'
import { BracketConsumer, InputConsumer, TestConsumer } from './CalcContext'

function CalcDisplay() {
  return (
  <div id='layerOne'>
    <InputConsumer>
    { digit => ( 
      <BracketConsumer>
    { brackets => { return <div className='d-flex align-items-end' id='calcomm'><div className='w-100 ps-2 text-end pe-3 pt-3 fw-bolder text-nowrap' id='CalcVal'>{digit}<span className='opacity-50' id='braVal'>{brackets}</span></div></div>
    }
    }
    </BracketConsumer>
    )}
    </InputConsumer>
    <TestConsumer>
    { test =>{ return <div  className=' w-100' id='calsolu'><div className='w-100 h3 pe-4 text-end opacity-25 fw-bold m-0 mt-3' id='solu'> {test} </div></div>}}
    </TestConsumer>
  </div>
  )
}

export default CalcDisplay