import React from 'react'
import "./reset.css"



class Reset extends React.Component {
    constructor(){
        super();
        this.state={value:""}
    }

    render(){
        return(
            <div>
            <button className="reset">Reset</button>


            </div>
        )
    }
    
}


export default Reset;