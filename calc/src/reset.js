import React from 'react'
import "./reset.css"



class Reset extends React.Component {
   
     
    

    render(){
        return(
            <div>
            <button className="reset" onClick={this.props.onClick}></button>


            </div>
        )
    }
    
}


export default Reset;