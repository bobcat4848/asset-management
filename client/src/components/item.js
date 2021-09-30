import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";


class Item extends Component{
    constructor(){
        super();
        this.name = "RYAN";
    }

    render(){
        return(
        <div>
            <h1>It's {this.name}!</h1>
            <input />
        </div>
        );
    }


}

export default Item;


