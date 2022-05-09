// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {

    constructor() {
        super();
    
        // Define the initial state:
        this.state = {
            timesClicked: 0,
        };
      }

      updateClicked = () => {
        this.setState({
            timesClicked: this.state.timesClicked +1
        })
      }


  render() {
    return <div>
            <button onClick={this.updateClicked} label={this.state.timesClicked} >{this.state.timesClicked}</button>
    </div>
    
    
    
  }
}
