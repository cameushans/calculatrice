import React from 'react'
import "./total.css"


class Total extends React.Component {
    render(){
    return (
          <div className="total">
          <p value={this.props.truc}> Input : </p>
    
             
          </div>
      )
  }

}

export default Total;