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
                <ul>{this.state.names}</ul> 
            </div>
        )
    }
}

export default NamesList;