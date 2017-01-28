import React, { Component } from 'react';

export class Pixel extends Component {
  constructor(props){
    super(props);
    this.state = {
      styles : {
      height: this.props.dimentions,
      width: this.props.dimentions,
      float: 'left',
      backgroundColor: '#f5f5f5'
    },
      pixelOn: false
    }
  }

  LightenPixel(){
    var state = this.state;

    if(!state.pixelOn) {
      state.styles.backgroundColor = '#595959';
      state.pixelOn = true;
      this.props.addToArrayOfOn(this.props.id);
    }else{
      state.styles.backgroundColor = '#f5f5f5';
      state.pixelOn = false;
      this.props.removeFromArrayOfOn(this.props.id);


    }
    this.setState(state);
  }

  render(){

    return (
      <div onClick={this.LightenPixel.bind(this)} style={this.state.styles}></div>
    )
  }
}