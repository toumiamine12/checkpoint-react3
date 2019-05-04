import React, { Component } from 'react';
class Card extends Component{
    render() {
        return(
            <div className="..">
                <div className="program" style={this.props.style}>
                    <center className="name">{this.props.name}</center>
                    <p>{this.props.par}</p>
                    <center><button>En savoir plus</button></center>
                </div>
            </div>
        )
    }
    
    }
    export default Card ;