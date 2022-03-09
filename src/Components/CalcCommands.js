import React, { Component } from 'react'
import './commandcalc.css'


class CalcCommands extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userInput:"",
       showValue:"_",
       calcUserFinalVal:"",
       showcalcValue:"",
       tempCalcValue:"",
       userBracket:"",
    }
    
    this.DclickOne=this.DclickOne.bind(this)
    this.DclickTwo=this.DclickTwo.bind(this)
    this.DclickThree=this.DclickThree.bind(this)
    this.DclickFour=this.DclickFour.bind(this)
    this.DclickFive=this.DclickFive.bind(this)
    this.DclickSix=this.DclickSix.bind(this)
    this.DclickSeven=this.DclickSeven.bind(this)
    this.DclickEight=this.DclickEight.bind(this)
    this.DclickNine= this.DclickNine.bind(this)
    this.DclickZero=this.DclickZero.bind(this)
    this.DclickPlus=this.DclickPlus.bind(this)
    this.DclickSubtract=this.DclickSubtract.bind(this)
    this.DclickDivide=this.DclickDivide.bind(this)
    this.DclickTimes=this.DclickTimes.bind(this)
    this.DclickPercentage=this.DclickPercentage.bind(this)
    this.FinalAnswer=this.FinalAnswer.bind(this)
    this.DclickBracketF=this.DclickBracketF.bind(this)
    this.DclickRevBracket=this.DclickRevBracket.bind(this)
    this.DclickPoint=this.DclickPoint.bind(this)

  }
  
  DclickOne = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}1`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q1"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true ){
        this.setState({
          showValue:this.state.showValue+"(q1"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true) {
        this.setState({
          showValue:this.state.showValue+"l1"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true  && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u1",
        userInput:this.state.userInput+"1"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true  && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h1",
        userInput:this.state.userInput+"1"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }
    

  }

  DclickTwo = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}2`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q2"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true ){
        this.setState({
          showValue:this.state.showValue+"(q2"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true) {
        this.setState({
          showValue:this.state.showValue+"l2"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u2",
        userInput:this.state.userInput+"2"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h2",
        userInput:this.state.userInput+"2"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }
    

  }

  DclickThree =()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}3`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q3"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true ){
        this.setState({
          showValue:this.state.showValue+"(q3"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true) {
        this.setState({
          showValue:this.state.showValue+"l3"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u3",
        userInput:this.state.userInput+"3"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h3",
        userInput:this.state.userInput+"3"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }



  }

  DclickFour = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}4`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q4"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true && filtAnsRes !== true){
        this.setState({
          showValue:this.state.showValue+"(q4"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true && filtAnsRes !== true) {
        this.setState({
          showValue:this.state.showValue+"l4"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u4",
        userInput:this.state.userInput+"4"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h4",
        userInput:this.state.userInput+"4"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }
    

  }


  DclickFive = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}5`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q5"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true && filtAnsRes !== true){
        this.setState({
          showValue:this.state.showValue+"(q5"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true && filtAnsRes !== true) {
        this.setState({
          showValue:this.state.showValue+"l5"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u5",
        userInput:this.state.userInput+"5"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h5",
        userInput:this.state.userInput+"5"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }
    

  }

  DclickSix = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}6`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q6"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true ){
        this.setState({
          showValue:this.state.showValue+"(q6"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true) {
        this.setState({
          showValue:this.state.showValue+"l6"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u6",
        userInput:this.state.userInput+"6"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h6",
        userInput:this.state.userInput+"6"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }


  }

  DclickSeven = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}7`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q7"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true && filtAnsRes !== true){
        this.setState({
          showValue:this.state.showValue+"(q7"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true && filtAnsRes !== true) {
        this.setState({
          showValue:this.state.showValue+"l7"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u7",
        userInput:this.state.userInput+"7"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h7",
        userInput:this.state.userInput+"7"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }
  }


  DclickEight = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}8`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q8"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true && filtAnsRes !== true){
        this.setState({
          showValue:this.state.showValue+"(q8"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true && filtAnsRes !== true) {
        this.setState({
          showValue:this.state.showValue+"l8"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u8",
        userInput:this.state.userInput+"8"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h8",
        userInput:this.state.userInput+"8"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }

  }

  DclickNine = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}9`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q9"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true && filtAnsRes !== true){
        this.setState({
          showValue:this.state.showValue+"(q9"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true && filtAnsRes !== true) {
        this.setState({
          showValue:this.state.showValue+"l9"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u9",
        userInput:this.state.userInput+"9"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h9",
        userInput:this.state.userInput+"9"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }
    


  }

  DclickZero = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterper = /(\%|\)|\.)/
    const filterresper= filterper.test(lasChar)
    const filtbrac =/\)$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filtpoint= /\.$/
    const filtPointRes= filtpoint.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(filterresper !== true && filtAnsRes !== true){
    this.setState({
      userInput:`${this.state.userInput}0`,
    },
    ()=>{
      
      const filterComputerChar = /(\+$|\-$|\/$|\*$|\($)/
      const filtercomputerresults = filterComputerChar.test(this.state.showValue)
      const filterspace = /\_$/
      const filtresults=filterspace.test(this.state.showValue)
      const filterdig= /\d$/
      const filtdigres= filterdig.test(this.state.showValue)
      if (filtercomputerresults === true){
        this.setState({
          showValue:this.state.showValue+"(q0"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{

              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )



              
            
            }
            )
            
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )


        }
        }
        )
      }else if(filtresults === true && filtAnsRes !== true ){
        this.setState({
          showValue:this.state.showValue+"(q0"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
        )
      }else if(filtdigres === true && filtAnsRes !== true) {
        this.setState({
          showValue:this.state.showValue+"l0"
        },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
        }
        )

      }
    }
    )


    }else if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        showValue:this.state.showValue+"*n(u0",
        userInput:this.state.userInput+"0"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+")"+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue+")",
          userBracket:""
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        
        }
        )
      }
      }
      )

    }else if (filtPointRes === true && filtAnsRes !== true){

      this.setState({
        showValue:this.state.showValue+"h0",
        userInput:this.state.userInput+"0"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue+")"+this.state.userBracket
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )


              }
              )
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue+")",
            userBracket:""
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          
          }
          )

        }
      }
      )


    }


  }

  DclickPlus = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterChar = /(\+|\-|\÷|\×|\(|\.)/
    const filterRes= filterChar.test(lasChar)
    const filterper= /(\%$|\)$)/ 
    const filtdig =/[0-9]$/
    const filtdigres= filtdig.test(this.state.userInput)
    const filterperres= filterper.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    if(this.state.userInput.length !== 0 && filterRes !== true  && filtdigres ===true ){
    this.setState({
      userInput:`${this.state.userInput}+`,
      showValue:`${this.state.showValue})m+` 
    },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        this.setState({
          userBracket:bratext
        },
        ()=>{

          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
          }
          )

        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue
        },
        ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
        }
        )
        
      }
    }
      )

    }else if (  this.state.userInput.length !== 0  && filterperres === true ){
      this.setState({
        userInput:`${this.state.userInput}+`,
        showValue:`${this.state.showValue}t+` 
      },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )
          
        }

      }
        )

    }else if(filtAnsRes === true){
      this.setState({
        userInput:`${this.state.userInput}+`,
        showValue:`${this.state.showValue}r+` 
      },
      ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
      }
      )

    }
  }

  DclickSubtract = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterChar = /(\+|\-|\÷|\×|\.)/
    const filterRes= filterChar.test(lasChar)
    const filterper= /(\%$|\)$)/ 
    const filterminus=/\_$|\($/
    const filterminusRes= filterminus.test(this.state.showValue) 
    const filtdig =/[0-9]$/
    const filtdigres= filtdig.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    const filterperres= filterper.test(this.state.userInput)
    if(filterRes !== true  && filtdigres ===true ){
    this.setState({
      userInput:`${this.state.userInput}-`,
      showValue:`${this.state.showValue})m-` 
    },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue
        },
        ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
        }
        )
        
      }
      })
    }else if(filterperres === true || filterminusRes === true ){
      this.setState({
        userInput:`${this.state.userInput}-`,
        showValue:`${this.state.showValue}t-` 
      },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )
          
        }
      }
        )

    }else if(filtAnsRes === true){
      this.setState({
        userInput:`${this.state.userInput}-`,
        showValue:`${this.state.showValue}r-` 
      },
      ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
      }
      )

    }
  }


  DclickTimes = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterChar = /(\+|\-|\÷|\×|\(|\.)/
    const filterRes= filterChar.test(lasChar)
    const filterper= /(\%$|\)$)/ 
    const filtdig =/[0-9]$/
    const filtdigres= filtdig.test(this.state.userInput) 
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    const filterperres= filterper.test(this.state.userInput)
    if(this.state.userInput.length !== 0 && filterRes !== true  && filtdigres ===true){
    this.setState({
      userInput:`${this.state.userInput}×`,
      showValue:`${this.state.showValue})m*` 
    },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue
        },
        ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
        }
        )
        
      }

      }
      )
    }else if (  this.state.userInput.length !== 0  && filterperres === true ){
      this.setState({
        userInput:`${this.state.userInput}×`,
        showValue:`${this.state.showValue}t*` 
      },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )
          
        }
        }
        )

    }else if(filtAnsRes === true){
      this.setState({
        userInput:`${this.state.userInput}×`,
        showValue:`${this.state.showValue}r*` 
      },
      ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
      }
      )

    }
  }

  

  DclickDivide = ()=>{
    const lasChar = this.state.userInput.charAt(this.state.userInput.length-1)
    const filterChar = /(\+|\-|\÷|\×|\(|\.)/
    const filterRes= filterChar.test(lasChar)
    const filterper= /(\%$|\)$)/ 
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    const filtdig =/[0-9]$/
    const filtdigres= filtdig.test(this.state.userInput)
    const filterperres= filterper.test(this.state.userInput)
    if(this.state.userInput.length !== 0 && filterRes !== true  && filtdigres ===true){
    this.setState({
      userInput:`${this.state.userInput}÷`,
      showValue:`${this.state.showValue})m/` 
    },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
          }
          )
        }
        )
      }else{
        this.setState({
          showcalcValue:this.state.showValue
        },
        ()=>{
          this.props.commandValue(this.state.userInput)
          this.props.testValue("")
          this.props.flipbra(this.state.userBracket)
        }
        )
        
      }

      }
      )
    }else if (  this.state.userInput.length !== 0  && filterperres === true ){
      this.setState({
        userInput:`${this.state.userInput}÷`,
        showValue:`${this.state.showValue}t/` 
      },
        ()=>{
          const resForBrac= (this.state.userInput.match(/\(/g) || []).length
          const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
          let bratext=""
          let i = 0  
          if(resForBrac !== resBacBrac){
             do {
                  bratext +=")"
                   i++
                } 
           while (i < resForBrac-resBacBrac)
          
          this.setState({
            userBracket:bratext
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
            }
            )
          }
          )
        }else{
          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
            }
            )
          }
          )
          
        }
        }
        )

    }else if(filtAnsRes === true){
      this.setState({
        userInput:`${this.state.userInput}÷`,
        showValue:`${this.state.showValue}r/` 
      },
      ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
      }
      )

    }
  }

  FinalAnswer= ()=>{
    const lasFilt=/\_$/
    const lasFiltRes= lasFilt.test(this.state.showValue)
    if(lasFiltRes === true && this.state.calcUserFinalVal.length !== 0 ){
      this.setState({
        userInput:this.state.userInput+"Ans",
        showValue:this.state.showValue+this.state.calcUserFinalVal
      },
      ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
      }
      )
    }



  }

  DclickPercentage = ()=>{
    const filtChar = /\d$/
    const filtDigres =filtChar.test(this.state.userInput) 
    const filtbrac = /\)$/
    const filtbracRes= filtbrac.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)

    if(this.state.userInput.length !== 0 && filtDigres === true && filtAnsRes !== true){
      this.setState({
        userInput:this.state.userInput+"%",
        showValue:this.state.showValue+"/10v0)"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )
      }else{
        this.setState({
          userBracket:"",
          showcalcValue:this.state.showValue
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        }
        )
        
      }

    }
      )

    }else if (this.state.userInput.length !== 0 && filtbracRes === true && filtAnsRes !== true){
      this.setState({
        userInput:this.state.userInput+"%",
        showValue:this.state.showValue+"/(10p0)"
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        
        this.setState({
          userBracket:bratext
        },
        ()=>{
          this.setState({
            showcalcValue:this.state.showValue+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
        }
        )

      }else{
        this.setState({
          userBracket:"",
          showcalcValue:this.state.showValue
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        }
        )
        
      }

      }
      )

    }
}

  DclickBracketF = ()=>{
    const filtBac=/\)$/
    const filtBacRes= filtBac.test(this.state.userInput)
    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    const filtPer= /\%$/
    const filtPerres = filtPer.test(this.state.userInput)
    const filtbrac= /\d$/
    const filtbracres= filtbrac.test(this.state.userInput)
    const filterChar = /(\+$|\-$|\÷$|\×$|\($)/
    const filtCharres = filterChar.test(this.state.userInput)
    const filterspace = /\_$/
    const filtresults=filterspace.test(this.state.showValue)
    if(filtbracres === true && filtAnsRes !== true){
      this.setState({
        userInput:this.state.userInput+"(",
        showValue:this.state.showValue+"j)k*k("
      },
      ()=>{
        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        }
        this.setState({
          userBracket:bratext
        },
        ()=>{

          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )

         
        }
        )
      
      }
      )
    }else if(filtCharres === true  || filtresults === true && filtAnsRes !== true){
      this.setState({
        userInput:this.state.userInput+"(",
        showValue:this.state.showValue+"d("
      },
      ()=>{

        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        }
        this.setState({
          userBracket:bratext
        },
        ()=>{

          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )

         
        }
        )
        
      }
      )

    }else if(filtPerres === true && filtAnsRes !== true){
      this.setState({
        userInput:this.state.userInput+"(",
        showValue:this.state.showValue+"z*("
      },
      ()=>{

        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        }
        this.setState({
          userBracket:bratext
        },
        ()=>{

          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )

         
        }
        )
        
      }
      )

    }else if(filtBacRes === true && filtAnsRes !== true){

      this.setState({
        userInput:this.state.userInput+"(",
        showValue:this.state.showValue+"b*r("
      },
      ()=>{

        const resForBrac= (this.state.userInput.match(/\(/g) || []).length
        const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
        let bratext=""
        let i = 0  
        if(resForBrac !== resBacBrac){
           do {
                bratext +=")"
                 i++
              } 
         while (i < resForBrac-resBacBrac)
        }
        this.setState({
          userBracket:bratext
        },
        ()=>{

          this.setState({
            showcalcValue:this.state.showValue
          },
          ()=>{
            this.props.commandValue(this.state.userInput)
            this.props.testValue("")
            this.props.flipbra(this.state.userBracket)
          }
          )

         
        }
        )
        
      }
      )

    }
  }
  DclickRevBracket = ()=>{
  const resForBrac= (this.state.userInput.match(/\(/g) || []).length
  const resBacBrac=(this.state.userInput.match(/\)/g) || []).length
  const filtChar= /(\+$|\-$|\($|\÷$|\×$|\%$)/
  const filtCharres= filtChar.test(this.state.userInput)
  const filtPer= /\%$/
  const filtPerRes= filtPer.test(this.state.userInput) 
  if( filtCharres !== true && this.state.userInput.length >0 && resForBrac !== resBacBrac){
    this.setState({
      userInput:this.state.userInput+")"
    },
    ()=>{
      const filterdigit= /\d$/
      const filtPerNbrac= /e\)g\)$/
      const filtsense= /f\)$/
      const filtsenseExpress =filtsense.test(this.state.showValue)
      const filterdigitRes= filterdigit.test(this.state.showValue)
      const filtPerNbracRes=filtPerNbrac.test(this.state.showValue)
      if(filterdigitRes === true){
        this.setState({
          showValue:this.state.showValue+"e)g)"
        },
        ()=>{
          const ForSlash= (this.state.userInput.match(/\(/g) || []).length
          const RevSlash =(this.state.userInput.match(/\)/g) || []).length
          if(ForSlash !== RevSlash){
            let bracket =""
            let i=0
            do{

              bracket +=")"
              i++
            }
            while(i < ForSlash-RevSlash)
            this.setState({
              userBracket:bracket
            },
            ()=>{

              this.setState({
                showcalcValue:this.state.showValue+ this.state.userBracket
              },
              ()=>{
                const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
              }
              )
            }
            )
          }else{
            this.setState({
              userBracket:"",
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
            }
            )
          }
        }
        )

      }else if(filtPerNbracRes === true){
        this.setState({
          showValue:this.state.showValue+"f)"
        },
        ()=>{
          const ForSlash= (this.state.userInput.match(/\(/g) || []).length
          const RevSlash =(this.state.userInput.match(/\)/g) || []).length
          if(ForSlash !== RevSlash){
            let bracket =""
            let i=0
            do{

              bracket +=")"
              i++
            }
            while(i < ForSlash-RevSlash)
            this.setState({
              userBracket:bracket
            },
            ()=>{

              this.setState({
                showcalcValue:this.state.showValue+this.state.userBracket
              },
              ()=>{
                const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                this.setState({
                  showcalcValue:newDEVICE
                },
                ()=>{
                  const result= Function("return " + this.state.showcalcValue)()
                this.setState({
                  tempCalcValue:result
                },
                ()=>{
                this.props.commandValue(this.state.userInput)
                 this.props.testValue(this.state.tempCalcValue)
                 this.props.flipbra(this.state.userBracket)
                }
                )
    
    
                }
                )
              }
              )
             
            }
            )
          }else{
            this.setState({
              userBracket:"",
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                showcalcValue:newDEVICE
              },
              ()=>{
                const result= Function("return " + this.state.showcalcValue)()
              this.setState({
                tempCalcValue:result
              },
              ()=>{
              this.props.commandValue(this.state.userInput)
               this.props.testValue(this.state.tempCalcValue)
               this.props.flipbra(this.state.userBracket)
              }
              )
  
  
              }
              )
            }
            )
          }
        }
        )

      }else if(filtsenseExpress === true){
        this.setState({
          showValue:this.state.showValue+"f)"
        },
        ()=>{
          const ForSlash= (this.state.userInput.match(/\(/g) || []).length
          const RevSlash =(this.state.userInput.match(/\)/g) || []).length
          if(ForSlash !== RevSlash){
            let bracket =""
            let i=0
            do{

              bracket +=")"
              i++
            }
            while(i < ForSlash-RevSlash)
            this.setState({
              userBracket:bracket
            },
            ()=>{

              this.setState({
                showcalcValue:this.state.showValue+this.state.userBracket
              },
              ()=>{
                const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                this.setState({
                  showcalcValue:newDEVICE
                },
                ()=>{
                  const result= Function("return " + this.state.showcalcValue)()
                this.setState({
                  tempCalcValue:result
                },
                ()=>{
                this.props.commandValue(this.state.userInput)
                 this.props.testValue(this.state.tempCalcValue)
                 this.props.flipbra(this.state.userBracket)
                }
                )
    
    
                }
                )
              }
              )
            }
            )
          }else{
            this.setState({
              userBracket:"",
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
            }
            )
          }
        }
        )

      }
    }
    )

  }else if( filtPerRes === true && this.state.userInput.length >0 && resForBrac !== resBacBrac){
    this.setState({
      userInput:this.state.userInput+")",
      showValue:this.state.showValue+"f)"
    },
    ()=>{
      const ForSlash= (this.state.userInput.match(/\(/g) || []).length
      const RevSlash =(this.state.userInput.match(/\)/g) || []).length
      if(ForSlash !== RevSlash){
        let bracket =""
        let i=0
        do{

          bracket +=")"
          i++
        }
        while(i < ForSlash-RevSlash)
        this.setState({
          userBracket:bracket
        },
        ()=>{

          this.setState({
            showcalcValue:this.state.showValue+this.state.userBracket
          },
          ()=>{
            const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
            this.setState({
              showcalcValue:newDEVICE
            },
            ()=>{
              const result= Function("return " + this.state.showcalcValue)()
            this.setState({
              tempCalcValue:result
            },
            ()=>{
            this.props.commandValue(this.state.userInput)
             this.props.testValue(this.state.tempCalcValue)
             this.props.flipbra(this.state.userBracket)
            }
            )


            }
            )
          }
          )
         
        }
        )
      }else{
        this.setState({
          userBracket:"",
          showcalcValue:this.state.showValue
        },
        ()=>{
          const newDEVICE=this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
          this.setState({
            showcalcValue:newDEVICE
          },
          ()=>{
            const result= Function("return " + this.state.showcalcValue)()
          this.setState({
            tempCalcValue:result
          },
          ()=>{
          this.props.commandValue(this.state.userInput)
           this.props.testValue(this.state.tempCalcValue)
           this.props.flipbra(this.state.userBracket)
          }
          )


          }
          )
        }
        )
      }
    }
    )


  }
}




  DclickPoint = ()=>{

    const filtAns=/Ans$/
    const filtAnsRes= filtAns.test(this.state.userInput)
    const filtSpace= /(\_$|\+$|\-$|\/$|\*$|\($)/g
    const filtSpaceresults = filtSpace.test(this.state.showValue)
    const filtdigit =/[0-9]$/g
    const filtdigitresults = filtdigit.test(this.state.showValue)
    if(filtSpaceresults === true && filtAnsRes !== true){
      this.setState({
        userInput:this.state.userInput+".",
        showValue:this.state.showValue+"(."
      },
      ()=>{
        this.setState({
          showcalcValue:this.state.showValue+")"
        },
        ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
        }
        )
      }
      )
    }else if(filtdigitresults === true && filtAnsRes !== true){
    const lasCharacter = this.state.userInput.length-1
    let pattern = /(\+|\-|\(|\÷|\×)/g

    let result=""
      while( pattern.test(this.state.userInput) === true )  {
        result =pattern.lastIndex
}
     let patternresult = Number(result)
     const filtText= this.state.userInput.slice(patternresult,lasCharacter)
     const pointlength=(filtText.match(/\./g) || []).length
     if(pointlength < 1 ){
       this.setState({
        userInput:this.state.userInput+".",
        showValue:this.state.showValue+"."
       },
       ()=>{
        this.setState({
          showcalcValue:this.state.showValue+")"
        },
        ()=>{
        this.props.commandValue(this.state.userInput)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)
        }
        )
       }
       )
     }

    }





  }

AllClear = ()=>{
  this.setState({
    userInput:"",
       showValue:"_",
       calcUserFinalVal:"",
       showcalcValue:"",
       tempCalcValue:"",
       userBracket:"",
  },
  ()=>{
    this.props.commandValue(this.state.userInput)
    this.props.testValue("")
  }
  )
}

Deletekey = ()=>{
  const filternum= /[0-9]$/
  const filtnumres= filternum.test(this.state.userInput)
  const filtPer= /\%$/
  const filtPerRes=filtPer.test(this.state.userInput)
  const filtforbrac= /\($/
  const filtforbracRes= filtforbrac.test(this.state.userInput)
  const filtrevbrac= /\)$/
  const filtrevbracRes= filtrevbrac.test(this.state.userInput)
  const filtoperators = /(\+$|\÷$|\×$|\-$)/
  const filtopeRes= filtoperators.test(this.state.userInput)
  const filtpoint = /\.$/
  const filtPointRes= filtpoint.test(this.state.userInput)
  const filtAns= /Ans$/
  const filtAnsRes= filtAns.test(this.state.userInput)

  if(filtnumres === true ){
    
    const newText= this.state.userInput.slice(0,-1)
    this.setState({
      userInput:newText
    },
    ()=>{
      const ForSlash= (this.state.userInput.match(/\(/g) || []).length
      const RevSlash =(this.state.userInput.match(/\)/g) || []).length
      if(ForSlash !== RevSlash){
        let bracket =""
        let i=0
        do{

          bracket +=")"
          i++
        }
        while(i < ForSlash-RevSlash)

        this.setState({
          userBracket:bracket
        },
        ()=>{
            const filterone= /\(q[0-9]$/ 
            const filtoneres=filterone.test(this.state.showValue)
            const filttwo =/l[0-9]$/
            const filttwores=filttwo.test(this.state.showValue)
            const filterthree= /\*n\(u[0-9]$/ 
            const filtthreeeres=filterthree.test(this.state.showValue)
            const filterfour= /h[0-9]$/
            const filterfourRes=filterfour.test(this.state.showValue)
        

            if(filtoneres=== true){
              const newVal =this.state.showValue.slice(0,-3)
              this.setState({
                showValue:newVal
              },
              ()=>{
                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }




              }
              )



            }else if(filttwores  === true || filterfourRes === true){
              const newVal =this.state.showValue.slice(0,-2)
              this.setState({
                showValue:newVal
              },
              ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

              }
              )

            
          }else if (filtthreeeres === true){
            const newVal =this.state.showValue.slice(0,-5)
            this.setState({
              showValue:newVal
            },
            ()=>{

              const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

            }
            )

            }


      }
        )


      }else{
          const filterone= /\(q[0-9]$/ 
          const filtoneres=filterone.test(this.state.showValue)
          const filttwo =/l[0-9]$/
          const filttwores=filttwo.test(this.state.showValue)
          const filterthree= /\*n\(u[0-9]$/ 
          const filtthreeeres=filterthree.test(this.state.showValue)
          const filterfour= /h[0-9]$/
          const filterfourRes=filterfour.test(this.state.showValue)
          if(filtoneres=== true){
            const newVal =this.state.showValue.slice(0,-3)
            this.setState({
              showValue:newVal
            },
            ()=>{
              const filtLasOne= /\d$/
              const filtLasOneRes=filtLasOne.test(this.state.showValue)
              const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
              const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
              const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
              const filtLasThreeRes=filtLasThree.test(this.state.showValue)

              if(filtLasOneRes === true){
                this.setState({
                  showcalcValue:this.state.showValue +")"
                },
                ()=>{
                  const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                  const tempVal= Function("return " + newComm)()
                  this.setState({
                    tempCalcValue:tempVal,
                    userBracket:""
                  },

                  ()=>{
                    this.props.commandValue(this.state.userInput)
                    this.props.testValue(this.state.tempCalcValue)
                    this.props.flipbra(this.state.userBracket)
                    
                  }

                  )
                }
                )
              }else if(filtLasTwoRes === true){


                this.setState({
                  showcalcValue:this.state.showValue
                },
                ()=>{
                  const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                  const tempVal= Function("return " + newComm)()
                  this.setState({
                    tempCalcValue:tempVal,
                    userBracket:""
                  },

                  ()=>{
                    this.props.commandValue(this.state.userInput)
                    this.props.testValue(this.state.tempCalcValue)
                    this.props.flipbra(this.state.userBracket)
                    
                  }

                  )
                }
                )

              }else if(filtLasThreeRes === true){
                this.setState({
                  showcalcValue:this.state.showValue
                },
                ()=>{
                  const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                  this.setState({
                    tempCalcValue:newComm,
                    userBracket:""
                  },
                  ()=>{
                    this.props.commandValue(this.state.userInput)
                    this.props.testValue("")
                    this.props.flipbra(this.state.userBracket)
                  }
                  )

                }
                )

              }




            }
            )
          }else if(filttwores  === true || filterfourRes === true){
            const newVal =this.state.showValue.slice(0,-2)
              this.setState({
                showValue:newVal
              },
              ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

              }
              )

          

          }else if (filtthreeeres === true){
            const newVal =this.state.showValue.slice(0,-5)
            this.setState({
              showValue:newVal
            },

            ()=>{
              const filtLasOne= /\d$/
              const filtLasOneRes=filtLasOne.test(this.state.showValue)
              const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
              const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
              const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
              const filtLasThreeRes=filtLasThree.test(this.state.showValue)

              if(filtLasOneRes === true){
                this.setState({
                  showcalcValue:this.state.showValue+")"
                },
                ()=>{
                  const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                  const tempVal= Function("return " + newComm)()
                  this.setState({
                    tempCalcValue:tempVal,
                    userBracket:""
                  },

                  ()=>{
                    this.props.commandValue(this.state.userInput)
                    this.props.testValue(this.state.tempCalcValue)
                    this.props.flipbra(this.state.userBracket)
                    
                  }

                  )
                }
                )
              }else if(filtLasTwoRes === true){


                this.setState({
                  showcalcValue:this.state.showValue
                },
                ()=>{
                  const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                  const tempVal= Function("return " + newComm)()
                  this.setState({
                    tempCalcValue:tempVal,
                    userBracket:""
                  },

                  ()=>{
                    this.props.commandValue(this.state.userInput)
                    this.props.testValue(this.state.tempCalcValue)
                    this.props.flipbra(this.state.userBracket)
                    
                  }

                  )
                }
                )

              }else if(filtLasThreeRes === true){
                this.setState({
                  showcalcValue:this.state.showValue
                },
                ()=>{
                  const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                  this.setState({
                    tempCalcValue:newComm,
                    userBracket:""
                  },
                  ()=>{
                    this.props.commandValue(this.state.userInput)
                    this.props.testValue("")
                    this.props.flipbra(this.state.userBracket)
                  }
                  )

                }
                )

              }

            }
            )

          }

      }





}
    )








 }else if( filtPerRes === true ){

    const newText= this.state.userInput.slice(0,-1)
    this.setState({
      userInput:newText
    },
    ()=>{
      const ForSlash= (this.state.userInput.match(/\(/g) || []).length
      const RevSlash =(this.state.userInput.match(/\)/g) || []).length
      if(ForSlash !== RevSlash){
        let bracket =""
        let i=0
        do{

          bracket +=")"
          i++
        }
        while(i < ForSlash-RevSlash)

        this.setState({
          userBracket:bracket
        },
        ()=>{
          const filterOne= /\/10v0\)$/
          const filtOneRes= filterOne.test(this.state.showValue)
          const filtTwo =/\/\(10p0\)$/
          const filtTwoRes= filtTwo.test(this.state.showValue)
          if(filtOneRes=== true){
            const newVal =this.state.showValue.slice(0,-6)
            this.setState({
              showValue:newVal
            },
            ()=>{
              const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

            }
            )
          }else if (filtTwoRes === true){
            const newVal =this.state.showValue.slice(0,-7)
            this.setState({
              showValue:newVal
            },
            ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

            }
            )

          }

        }
        )



  
      
  }else{

    const filterOne= /\/10v0\)$/
    const filtOneRes= filterOne.test(this.state.showValue)
    const filtTwo =/\/\(10p0\)$/
    const filtTwoRes= filtTwo.test(this.state.showValue)
    if(filtOneRes=== true){
      const newVal =this.state.showValue.slice(0,-6)
      this.setState({
        showValue:newVal
      },
      ()=>{
        const filtLasOne= /\d$/
          const filtLasOneRes=filtLasOne.test(this.state.showValue)
          const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
          const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
          const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
          const filtLasThreeRes=filtLasThree.test(this.state.showValue)

          if(filtLasOneRes === true){
            this.setState({
              showcalcValue:this.state.showValue +")"
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )
          }else if(filtLasTwoRes === true){


            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )

          }else if(filtLasThreeRes === true){
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                tempCalcValue:newComm,
                userBracket:""
              },
              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue("")
                this.props.flipbra(this.state.userBracket)
              }
              )

            }
            )

          }

      }
      )
    }else if (filtTwoRes === true){
      const newVal =this.state.showValue.slice(0,-7)
      this.setState({
        showValue:newVal
      },
      ()=>{

          const filtLasOne= /\d$/
          const filtLasOneRes=filtLasOne.test(this.state.showValue)
          const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
          const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
          const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
          const filtLasThreeRes=filtLasThree.test(this.state.showValue)

          if(filtLasOneRes === true){
            this.setState({
              showcalcValue:this.state.showValue +")"
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )
          }else if(filtLasTwoRes === true){


            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )

          }else if(filtLasThreeRes === true){
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                tempCalcValue:newComm,
                userBracket:""
              },
              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.showValue)
                this.props.flipbra(this.state.userBracket)
              }
              )

            }
            )

          }

      }
      )

    }


  }


}
    )
  


  
  
}else if( filtforbracRes === true ){
    const newText= this.state.userInput.slice(0,-1)
    this.setState({
      userInput:newText
    },
    ()=>{

      const ForSlash= (this.state.userInput.match(/\(/g) || []).length
      const RevSlash =(this.state.userInput.match(/\)/g) || []).length
      if(ForSlash !== RevSlash){
        let bracket =""
        let i=0
        do{

          bracket +=")"
          i++
        }
        while(i < ForSlash-RevSlash)

        this.setState({
          userBracket:bracket
        },
        ()=>{
          
            const filterone= /z\*\($/ 
            const filtoneres=filterone.test(this.state.showValue)
            const filttwo =/j\)k\*k\($/
            const filttwores=filttwo.test(this.state.showValue)
            const filterthree= /d\($/ 
            const filtthreeeres=filterthree.test(this.state.showValue)
            const filterfour= /b\*r\($/ 
            const filtfourres=filterfour.test(this.state.showValue)
            if(filtoneres === true){
              const newVal =this.state.showValue.slice(0,-3)
              this.setState({
                showValue:newVal
              },
              ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

              }
              
              )

            }else if(filttwores === true){
              const newVal =this.state.showValue.slice(0,-6)
              this.setState({
                showValue:newVal
              },
              ()=>{
                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }
              }
              )

            }else if(filtthreeeres === true){
              const newVal =this.state.showValue.slice(0,-2)
              this.setState({
                showValue:newVal
              },
              ()=>{
                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }
              }
              )

            }else if(filtfourres === true){
              const newVal =this.state.showValue.slice(0,-4)
              this.setState({
                showValue:newVal
              },
              ()=>{
                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }
              }
              )

            }

        }
        )
      }else{

          const filterone= /z\*\($/ 
          const filtoneres=filterone.test(this.state.showValue)
          const filttwo =/j\)k\*k\($/
          const filttwores=filttwo.test(this.state.showValue)
          const filterthree= /d\($/ 
          const filtthreeeres=filterthree.test(this.state.showValue)
          const filterfour= /b\*r\($/ 
          const filtfourres=filterfour.test(this.state.showValue)
          if(filtoneres === true){
            const newVal =this.state.showValue.slice(0,-3)
            this.setState({
              showValue:newVal
            },
            ()=>{

          const filtLasOne= /\d$/
          const filtLasOneRes=filtLasOne.test(this.state.showValue)
          const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
          const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
          const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
          const filtLasThreeRes=filtLasThree.test(this.state.showValue)

          if(filtLasOneRes === true){
            this.setState({
              showcalcValue:this.state.showValue +")"
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )
          }else if(filtLasTwoRes === true){


            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )

          }else if(filtLasThreeRes === true){
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                tempCalcValue:newComm,
                userBracket:""
              },
              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue("")
                this.props.flipbra(this.state.userBracket)
              }
              )

            }
            )

          }

            }
            )

          }else if(filttwores === true){
            const newVal =this.state.showValue.slice(0,-6)
            this.setState({
              showValue:newVal
            },
            ()=>{
          const filtLasOne= /\d$/
          const filtLasOneRes=filtLasOne.test(this.state.showValue)
          const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
          const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
          const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
          const filtLasThreeRes=filtLasThree.test(this.state.showValue)

          if(filtLasOneRes === true){
            this.setState({
              showcalcValue:this.state.showValue +")"
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )
          }else if(filtLasTwoRes === true){


            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )

          }else if(filtLasThreeRes === true){
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                tempCalcValue:newComm,
                userBracket:""
              },
              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue("")
                this.props.flipbra(this.state.userBracket)
              }
              )

            }
            )

          }
            }
            )

          }else if(filtthreeeres === true){
            const newVal =this.state.showValue.slice(0,-2)
            this.setState({
              showValue:newVal
            },
            ()=>{
          const filtLasOne= /\d$/
          const filtLasOneRes=filtLasOne.test(this.state.showValue)
          const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
          const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
          const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
          const filtLasThreeRes=filtLasThree.test(this.state.showValue)

          if(filtLasOneRes === true){
            this.setState({
              showcalcValue:this.state.showValue +")"
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )
          }else if(filtLasTwoRes === true){


            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )

          }else if(filtLasThreeRes === true){
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                tempCalcValue:newComm,
                userBracket:""
              },
              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue("")
                this.props.flipbra(this.state.userBracket)
              }
              )

            }
            )

          }
            }
            )

          }else if(filtfourres === true){
            const newVal =this.state.showValue.slice(0,-4)
            this.setState({
              showValue:newVal
            },
            ()=>{
          const filtLasOne= /\d$/
          const filtLasOneRes=filtLasOne.test(this.state.showValue)
          const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
          const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
          const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($|\_$)/
          const filtLasThreeRes=filtLasThree.test(this.state.showValue)

          if(filtLasOneRes === true){
            this.setState({
              showcalcValue:this.state.showValue +")"
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )
          }else if(filtLasTwoRes === true){


            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              const tempVal= Function("return " + newComm)()
              this.setState({
                tempCalcValue:tempVal,
                userBracket:""
              },

              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue(this.state.tempCalcValue)
                this.props.flipbra(this.state.userBracket)
                
              }

              )
            }
            )

          }else if(filtLasThreeRes === true){
            this.setState({
              showcalcValue:this.state.showValue
            },
            ()=>{
              const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
              this.setState({
                tempCalcValue:newComm,
                userBracket:""
              },
              ()=>{
                this.props.commandValue(this.state.userInput)
                this.props.testValue("")
                this.props.flipbra(this.state.userBracket)
              }
              )

            }
            )

          }
            }
            )

          }



      }



    }
    )
  
  
  }else if(filtPointRes === true ){
    const newText= this.state.userInput.slice(0,-1)
    this.setState({
      userInput:newText
    },
    ()=>{

      const ForSlash= (this.state.userInput.match(/\(/g) || []).length
      const RevSlash =(this.state.userInput.match(/\)/g) || []).length
      if(ForSlash !== RevSlash){
        let bracket =""
        let i=0
        do{

          bracket +=")"
          i++
        }
        while(i < ForSlash-RevSlash)

        this.setState({
          userBracket:bracket
        },
        ()=>{
          const filterOne= /\(\.$/
          const filtOneRes= filterOne.test(this.state.showValue)
          const filtTwo =/\.$/
          const filtTwoRes= filtTwo.test(this.state.showValue)
            if(filtOneRes === true){
              const newVal= this.state.showValue.slice(0,-2)
              this.setState({
                showValue:newVal
              },
              ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

              }
              )

          }else if(filtTwoRes === true){
            const newVal= this.state.showValue.slice(0,-1)
              this.setState({
                showValue:newVal
              },
              ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }
                
              }
              )

              }

        }
        )
      }else{

        const filterOne= /\(\.$/
          const filtOneRes= filterOne.test(this.state.showValue)
          const filtTwo =/\.$/
          const filtTwoRes= filtTwo.test(this.state.showValue)
            if(filtOneRes === true){
              const newVal= this.state.showValue.slice(0,-2)
              this.setState({
                showValue:newVal
              },
              ()=>{
                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)
      
                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
                }else if(filtLasTwoRes === true){
      
      
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
      
                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )
      
                  }
                  )
      
                }

              }
              )

          }else if(filtTwoRes === true){
            const newVal= this.state.showValue.slice(0,-1)
              this.setState({
                showValue:newVal
              },
              ()=>{

                const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)
      
                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
                }else if(filtLasTwoRes === true){
      
      
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
      
                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )
      
                  }
                  )
      
                }
                
              }
              )

              }


      }
      
}
    )
}else if(filtrevbracRes === true ){
  const newText= this.state.userInput.slice(0,-1)
  this.setState({
    userInput:newText
  },
  ()=>{

    const ForSlash= (this.state.userInput.match(/\(/g) || []).length
    const RevSlash =(this.state.userInput.match(/\)/g) || []).length
    if(ForSlash !== RevSlash){
      let bracket =""
      let i=0
      do{

        bracket +=")"
        i++
      }
      while(i < ForSlash-RevSlash)

      this.setState({
        userBracket:bracket
      },
      ()=>{
        const filterOne= /\e\)g\)$/
        const filtOneRes= filterOne.test(this.state.showValue)
        const filtTwo =/\f\)$/
        const filtTwoRes= filtTwo.test(this.state.showValue)

        if(filtOneRes===true){
        const newVal= this.state.showValue.slice(0,-4)
        this.setState({
          showValue:newVal
        },
        ()=>{
          const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

        }
        )
      }else if(filtTwoRes === true){
        const newVal= this.state.showValue.slice(0,-2)
        this.setState({
          showValue:newVal
        },
        ()=>{
          const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

        }
        )

      }
      }
      )
    }else{
      const filterOne= /\e\)g\)$/
        const filtOneRes= filterOne.test(this.state.showValue)
        const filtTwo =/\f\)$/
        const filtTwoRes= filtTwo.test(this.state.showValue)

        if(filtOneRes===true){
        const newVal= this.state.showValue.slice(0,-4)
        this.setState({
          showValue:newVal
        },
        ()=>{

          const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)
      
                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
                }else if(filtLasTwoRes === true){
      
      
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
      
                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )
      
                  }
                  )
      
                }
          
        }
        )
      }else if(filtTwoRes === true){
        const newVal= this.state.showValue.slice(0,-2)
        this.setState({
          showValue:newVal
        },
        ()=>{
          const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)
      
                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
                }else if(filtLasTwoRes === true){
      
      
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
      
                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )
      
                  }
                  )
      
                }

        }
        )

      }
    }
  }
  )
  

}else if(filtopeRes === true ){

  const newText= this.state.userInput.slice(0,-1)
  this.setState({
    userInput:newText
  },
  ()=>{

    const ForSlash= (this.state.userInput.match(/\(/g) || []).length
    const RevSlash =(this.state.userInput.match(/\)/g) || []).length
    if(ForSlash !== RevSlash){
      let bracket =""
      let i=0
      do{

        bracket +=")"
        i++
      }
      while(i < ForSlash-RevSlash)

      this.setState({
        userBracket:bracket
      },
      ()=>{
        const filterOne= /\)m(\/|\-|\+|\*)$/
        const filtOneRes= filterOne.test(this.state.showValue)
        const filtTwo =/t(\/|\-|\+|\*)$/
        const filtTwoRes= filtTwo.test(this.state.showValue)
        if(filtOneRes===true){
          const newVal= this.state.showValue.slice(0,-3)
          this.setState({
            showValue:newVal
          },
          ()=>{
            const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }

          }
          )
          }else if(filtTwoRes === true){
            const newVal= this.state.showValue.slice(0,-2)
            this.setState({
              showValue:newVal
            },
            ()=>{
              const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)

                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )
                }else if(filtLasTwoRes === true){


                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal
                    },

                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }

                    )
                  }
                  )

                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue+this.state.userBracket
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )

                  }
                  )

                }
  
            }
            )

          }
      }
      )
    }else{

      const filterOne= /\)m(\/|\-|\+|\*)$/
        const filtOneRes= filterOne.test(this.state.showValue)
        const filtTwo =/t(\/|\-|\+|\*)$/
        const filtTwoRes= filtTwo.test(this.state.showValue)
        const filtThree =/r(\/|\-|\+|\*)$/
        const filtThreeRes= filtThree.test(this.state.showValue)
        if(filtOneRes===true){
          const newVal= this.state.showValue.slice(0,-3)
          this.setState({
            showValue:newVal
          },
          ()=>{
            const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)
      
                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
                }else if(filtLasTwoRes === true){
      
      
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
      
                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )
      
                  }
                  )
      
                }

          }
          )
          }else if(filtTwoRes === true){
            const newVal= this.state.showValue.slice(0,-2)
            this.setState({
              showValue:newVal
            },
            ()=>{
              const filtLasOne= /\d$/
                const filtLasOneRes=filtLasOne.test(this.state.showValue)
                const filtLasTwo=/(e\)g\)$|f\)$|\/\(10p0\)$|\/10v0\)$)/
                const filtLasTwoRes= filtLasTwo.test(this.state.showValue)
                const filtLasThree=/(\+$|\-$|\/$|\*$|\.$|\($)/
                const filtLasThreeRes=filtLasThree.test(this.state.showValue)
      
                if(filtLasOneRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue +")"
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
                }else if(filtLasTwoRes === true){
      
      
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    const tempVal= Function("return " + newComm)()
                    this.setState({
                      tempCalcValue:tempVal,
                      userBracket:""
                    },
      
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue(this.state.tempCalcValue)
                      this.props.flipbra(this.state.userBracket)
                      
                    }
      
                    )
                  }
                  )
      
                }else if(filtLasThreeRes === true){
                  this.setState({
                    showcalcValue:this.state.showValue
                  },
                  ()=>{
                    const newComm= this.state.showcalcValue.replace(/[\_,e,g,f,m,t,k,j,z,d,v,p,b,r,n,u,q,l,h]/g,"")
                    this.setState({
                      tempCalcValue:newComm,
                      userBracket:""
                    },
                    ()=>{
                      this.props.commandValue(this.state.userInput)
                      this.props.testValue("")
                      this.props.flipbra(this.state.userBracket)
                    }
                    )
      
                  }
                  )
      
                }
  
            }
            )

          }else if(filtThreeRes===true){
            const newVal= this.state.showValue.slice(0,-2)
            this.setState({
              showValue:newVal
            },
            ()=>{
              this.props.commandValue(this.state.userInput)
              this.props.testValue("")
              this.props.flipbra(this.state.userBracket)

            }
            
            )
            }

      


    }
  }
  )

}else if(filtAnsRes === true){
  const newText=this.state.userInput.slice(0,-3)
  this.setState({
    userInput:newText
  },
  ()=>{
    const newVal=this.state.showValue.slice(0,0)
    this.setState({
      showValue:newVal
    },
    ()=>{

      this.setState({
        showValue:"_"
      },
      ()=>{
      this.props.commandValue(this.state.userInput)
      this.props.testValue("")
      this.props.flipbra(this.state.userBracket)

      }
      )
      
    }
    )

  }
  )


}
  
  

}

showAnswer = ()=>{

  const filtVar=/(\+$|\-$|\÷$|\×$|\($|\.$)/
  const filtVarRes=filtVar.test(this.state.userInput)
  const filtSpace=/\_$/
  const filtSpaceresults= filtSpace.test(this.state.showValue)
  if(filtVarRes !== true && filtSpaceresults !== true){
    this.setState({
      calcUserFinalVal:this.state.tempCalcValue
    },
    ()=>{
      this.setState({
        userInput:"",
        showValue:"_",
        showcalcValue:"",
        userBracket:""
      },
      ()=>{
        this.props.commandValue(this.state.calcUserFinalVal)
        this.props.testValue("")
        this.props.flipbra(this.state.userBracket)

      }
      )

    }
    )
  }


}


  componentDidMount(){
    window.addEventListener('keydown', (event) => {
      if (event.key === "1") {
        this.setState(prevState => ({
          userInput: prevState.userInput + "1",
          showValue: prevState.userInput + "1"
        }))
    }else  if (event.key === "2") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "2",
        showValue: prevState.userInput + "2"
      }))
    }else if (event.key === "3") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "3",
        showValue: prevState.userInput + "3"
      }))
    }else if (event.key === "4") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "4",
        showValue: prevState.userInput + "4"
      }))
    }else if (event.key === "5") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "5",
        showValue: prevState.userInput + "5"
      }))
    }else if (event.key === "6") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "6",
        showValue: prevState.userInput + "6"
      }))
    }else if (event.key === "7") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "7",
        showValue: prevState.userInput + "7"
      }))
    }else if (event.key === "8") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "8",
        showValue: prevState.userInput + "8"
      }))
    }else if (event.key === "9") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "9",
        showValue: prevState.userInput + "9"
      }))
    }else if (event.key === "0") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "0",
        showValue: prevState.userInput + "0"
      }))
    }else if (event.key === "/") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "/",
        showValue: prevState.userInput + "÷"
      }))
    }else if (event.key === "+") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "+",
        showValue: prevState.userInput + "+"
      }))
    }else if (event.key === "-") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "-",
        showValue: prevState.userInput + "-"
      }))
    }else if (event.key === "*") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "*",
        showValue: prevState.userInput + "×"
      }))
    }else if (event.key === "(") {
      this.setState(prevState => ({
        userInput: prevState.userInput + "(",
        showValue: prevState.userInput + "("
      }))
    }else if (event.key === ")") {
      this.setState(prevState => ({
        userInput: prevState.userInput + ")",
        showValue: prevState.userInput + ")"
      }))
    }else if (event.key === ".") {
      this.setState(prevState => ({
        userInput: prevState.userInput + ".",
        showValue: prevState.userInput + "."
      }))
    } 
    })
  }
  render() {
    console.log(this.state.userInput);
    return (
      <>
      <div className='d-flex w-100 mx-auto d-none d-md-block ' id='layerTwo'>
        <table className='table table-borderless h-100 ' id='tbl'>
          <tbody>
          <tr>
            <td></td>
            <td>
            <div className='d-grid'>
              <button type='button' className='btn  fw-bolder btn-block mt-2' id='operaColor' onClick={this.DclickBracketF}>(</button>
              </div>
              </td>
            <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bolder btn-block mt-2'  id='operaColor' onClick={this.DclickRevBracket}>)</button>
              </div>
              </td>
              
            <td>
            <div className='d-grid'>
              <button type='button' className='btn  fw-bolder  btn-block mt-2'  id='operaColor' onClick={this.Deletekey}>Del</button>
              </div></td>
            <td>
            <div className='d-grid '>
              <button type='button' className='btn btn-block  fw-bolder text-white mt-2' id='operaColorII' onClick={this.AllClear}>AC</button>
              </div>
              </td>
          </tr>
          <tr>
          <td>
            <div className='p-2  fw-bolder  text-center w-50 mx-auto' id='varTxt' onClick={this.DclickSeven}>
            7
          </div>
          </td>
            <td>
              <div className='p-2  fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickEight}>
            8
          </div>
          </td>
            <td>
              <div className='p-2  fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickNine}>
            9
          </div>
          </td>
            <td>
            <div className='d-grid'>
              <button type='button' className='btn  fw-bolder btn-block' id='operaColor' onClick={this.DclickPercentage}>%</button>
              </div>
              </td>
            <td>
            <div className='d-grid'>
            <button type='button' className='btn  fw-bolder btn-block'  id='operaColor' onClick={this.DclickSubtract}>-</button>
            </div>
            </td>
          </tr>
          <tr>
          <td>
          <div className='p-2  fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickFour}>
            4
          </div>
            </td>
            <td>
              <div className='p-2  fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickFive}>
            5
          </div>
          </td>
            <td>
            <div className='p-2  fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickSix}>
            6
          </div>
          </td>
            <td>
            <div className='d-grid'>
              <button type='button' className='btn  fw-bolder btn-block'  id='operaColor' onClick={this.DclickTimes}> × </button>
              </div>
            </td>
            <td rowSpan="2" id='conPlus'>
            <div className='d-grid' id='test' >
              <button type='button' className='btn  fw-bolder btn-block h-100 p-0' id='plusHi' onClick={this.DclickPlus}>+</button>
              </div>
              </td>
            </tr>
            <tr>
          <td>
            <div className='p-2  fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickOne}>
            1
          </div>
          </td>
            <td><div className='p-2 fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickTwo}>
            2
          </div>
          </td>
            <td><div className='p-2   fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickThree}>
           3
          </div>
          </td>
            <td>
            <div className='d-grid '>
              <button type='button' className='btn   fw-bolder btn-block'  id='operaColor' onClick={this.DclickDivide}>÷</button>
              </div>
              </td>
            </tr>
            <tr>
          <td>
          <div className='d-grid'>
            
            <button type='button' className='btn btn-block  fw-bolder text-white' id='operaColorII' onClick={this.FinalAnswer}>Ans</button>
            </div></td>
            <td>
              <div className='p-2 mt-2 fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickZero}>
            0
          </div>
          </td>
            <td>
              <div className='p-2 mt-2 fw-bolder text-center w-50 mx-auto' id='varTxt' onClick={this.DclickPoint}>
            .
          </div>
          </td>
            <td colSpan="2">
            <div className='d-grid'>
              <button type='button' className='btn  fw-bolder btn-block '  id='operaColor' onClick={this.showAnswer}>=</button>
              </div>
              </td>
            </tr>
          </tbody>

          
        </table>
      </div>
      <div className='d-flex w-100 mx-auto d-md-none' id='layerTwoi' >
      <table className='table table-borderless h-100 ' id='tbl'>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold btn-block mx-auto p-0 mt-2 text-center'  id='operaColorsm'  onClick={this.Deletekey}>del</button>
              </div>
              </td>
              <td>
              <div className='d-grid '>
              <button type='button' className='btn btn-block mx-auto text-center p-0 fw-bold text-white mt-1' id='operaColorIIsm' onClick={this.AllClear}>AC</button>
              </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickBracketF}>(</button>
              </div>
              </td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickRevBracket}>)</button>
              </div>
              </td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickPercentage}>%</button>
              </div>
              </td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickDivide}>÷</button>
              </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickSeven}>
               7
              </div>
               </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickEight}>
               8
              </div>
              </td>
              <td> <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickNine}>
               9
              </div></td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickTimes}>×</button>
              </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickFour}>
               4
              </div>
              </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickFive}>
               5
              </div>
              </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickSix}>
               6
              </div>
              </td>
              <td>
                <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickSubtract}>-</button>
              </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickOne}>
               1
              </div>
              </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto  pt-2' id='varTxtsm' onClick={this.DclickTwo}>
               2
              </div>
              </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2' id='varTxtsm' onClick={this.DclickThree}>
               3
              </div>
              </td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto p-0 text-center'  id='operaColorsm' onClick={this.DclickPlus}>+</button>
              </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className='d-grid '>
              <button type='button' className='btn btn-block mx-auto text-center p-0 fw-bold text-white' id='operaColorIIsm' onClick={this.FinalAnswer}>
                ans
              </button>
              </div>
              </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2 mt-1' id='varTxtsm' onClick={this.DclickZero}>
               0
              </div>
              </td>
              <td>
              <div className='fw-bolder text-center w-100 mx-auto pt-2 mt-1' id='varTxtsm' onClick={this.DclickPoint}>
               .
              </div>
              </td>
              <td>
              <div className='d-grid'>
              <button type='button' className='btn  fw-bold  btn-block mx-auto  p-0 text-center'  id='operaColorsm' onClick={this.showAnswer}>=</button>
              </div>
              </td>
            </tr>
            </tbody>
            </table>
        
        </div>
      </>
    )
  }
}

export default CalcCommands