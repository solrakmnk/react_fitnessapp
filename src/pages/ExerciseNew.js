import React from 'react'

class ExersiceNew extends React.Component {
/*    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this)
    }*/
    handleClick=()=>{
        console.log(this)
    }
    render (){
        return(
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}

export default ExersiceNew