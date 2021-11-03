import React, { Component } from "react";

class SuperheroTable extends Component{
    constructor(props){
        super(props)

        this.state = {
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        } 
    }
    render(){
        return(
            <div>
                {this.state.superheroes.map(function(superhero){
                    return (
                        <div>
                            <table>
                                <tr>
                                    <th>Superhero Name</th>
                                    <th>Primary Ability</th>
                                    <th>Secondary ability</th>
                                </tr>
                                <tr>
                                <td>{superhero.name}</td>
                                <td>{superhero.primaryAbility}</td>
                                <td>{superhero.secondaryAbility}</td>
                                </tr>
                            </table>
                        </div>
                    )
                    
                })} 
            </div>
        )
    }
}

export default SuperheroTable;

                           