import React, { Component } from 'react';
import { Pixel } from '../Pixel/Pixel';

export class Display extends Component {

  constructor(props) {
    super(props);
    this.styles = {
      backgroundColor: '#f5f5f5',
      width: 600,
      height: 600,
      margin: '0 auto'
    };

    this.arrayOfOn = [];
  }

  addToArrayOfOn(id){
    this.arrayOfOn.push(id);
    console.log(this.arrayOfOn);
  }

  removeFromArrayOfOn(id){
    this.arrayOfOn.remove(id);
  }
  generatePixels() {

    var pixelsDensity = 10;
    var pixelsPerRow = this.styles.width / pixelsDensity;

    var totalPixels = pixelsPerRow * pixelsPerRow;
    var pixels = [];

    for(var i = 0; i < totalPixels; i++){
      pixels.push(<Pixel key={i} id={i} addArrayOfOn={this.addToArrayOfOn} removeArrayOfOn={this.removeFromArrayOfOn} dimentions={pixelsDensity}/>)
    }

    return pixels;

  }

  render() {
    var pixels = this.generatePixels.bind(this)();
    return (
      <div style={this.styles}>
        {pixels}
      </div>
    )
  }
}