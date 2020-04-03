import React from 'react'
import "./total.css"


class Total extends React.Component {
    render(){
    return (
          <div className="total">
             {this.props.value}
          </div>
      )
  }

}

export default Total;