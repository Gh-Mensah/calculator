import { click } from '@testing-library/user-event/dist/click'
import React, { Component } from 'react'
import CalcCommands from './CalcCommands'
import { BracketProvider, TestProvider, ValueProvider } from './CalcContext'
import CalcDisplay from './CalcDisplay'

class CalcContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       works:"",
       testvar:"",
       bracketvar:""
    }
  }

  InputValueCallback = (inval) => {
    this.setState({
      works:inval
  })
  }

  ShowValueCallback =(test) =>{
    this.setState({
      testvar:test
    })
  }

  showBracketValue = (kick) => {
    this.setState({
      bracketvar:kick
    })
  }
  
  render() {
    return (
      <>
      <ValueProvider value={this.state.works}>
      <TestProvider value={this.state.testvar}>
      <BracketProvider value={this.state.bracketvar}  >
      <CalcDisplay/>
      </BracketProvider>
      </TestProvider>
      </ValueProvider>
      <CalcCommands commandValue={this.InputValueCallback}  testValue={this.ShowValueCallback}  flipbra={this.showBracketValue}  />
      </>
    )
  }
}

export default CalcContainer