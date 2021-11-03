import React, { Component } from "react";


class NamesList extends Component{
    constructor(props){
        super(props)

        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }        
    }
    render(){
        return(
            <div>
                <h1>{this.state.firstName} {this.state.lastName}</h1> 
            </div>
        )
    }
}

export default NamesList