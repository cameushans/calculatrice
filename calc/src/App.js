import React from 'react';
import './App.css';
import Total from "./total";
import Reset from "./reset"

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      truc:"0"
    }

    this.handleClick = this.handleClick.bind(this);
   // this.resetClick = this.resetClick(this)
  }

    handleClick = (e)=>{
     const newValue = e.target.value;
      this.setState({
        truc:newValue
      });


 /*  resetClick = (e)=>{
     console.log(e)
     this.setState({
       truc: ""
     })
   }*/

    
}

  render(){
  return (
    <div className = "centre">
  


     <h1>Calculatrice</h1>
         <Total>{this.handleClick}}</Total>

        <div className="App">
            <button value="1" onClick ={this.handleClick}>1</button>
            <button value="2" onClick ={this.handleClick}>2</button>
            <button value="3" onClick ={this.handleClick}>3</button>
            <button value="*" onClick ={this.handleClick}>*</button>
            <button value="4" onClick ={this.handleClick}>4</button>
            <button value="5" onClick ={this.handleClick}>5</button>
            <button value="6" onClick ={this.handleClick}>6</button>
            <button value="-" onClick ={this.handleClick}>-</button>
            <button value="7" onClick ={this.handleClick}>7</button>
            <button value="8" onClick ={this.handleClick}>8</button>
            <button value="9" onClick ={this.handleClick}>9</button>
            <button value="+" onClick ={this.handleClick}>+</button>
            <button value="0" onClick ={this.handleClick}>0</button>
            <button value="." onClick ={this.handleClick}>.</button>
            <button value="/" onClick ={this.handleClick}>/</button>
            <button value="=" onClick ={this.handleClick}>=</button>
         </div>
         <Reset />
     </div>    
  );
  }
}

export default App;