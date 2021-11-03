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
                <h1>List of Names</h1>
                {this.state.names.map(function(name){
                    return <p>{name}</p>
                })} 
            </div>
        )
    }
}

export default NamesList;