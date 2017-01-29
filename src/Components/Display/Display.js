import React, {Component} from 'react';
import Pixel from '../Pixel/Pixel';

import * as actions from '../../Redux/Actions/Actions';

const monsters = require('../../monsterPlots/monsterPlots.json');

import {connect} from 'react-redux';

let drawTimer;

class Display extends Component {

  constructor(props) {
    super(props);
    this.styles = {
      backgroundColor: '#f5f5f5',
      width: 600,
      height: 600,
      margin: '0 auto'
    };

  }

  componentWillMount() {
    var pixelsDensity = 10;
    this.props.setPixelDensity(pixelsDensity);
    var pixelsPerRow = this.styles.width / pixelsDensity;
    this.props.setPixelsPerRow(pixelsPerRow);


    let currentMonster = monsters.baby;
    console.log(currentMonster);


  }

  componentDidMount() {

  }

  generatePixels() {


    var totalPixels = Math.pow(this.props.pixelsPerRow, 2);
    var litPixelsFromState = this.props.litPixelIndexArray;
    var pixels = [];

    for (var i = 0; i < totalPixels; i++) {
      let isOn = litPixelsFromState.includes(i);
      pixels.push(<Pixel key={i}
                         index={i}
                         isOn={isOn}
                         dimentions={this.props.pixelDensity}/>)
    }

    return pixels;
  }

  runGameLoop() {
    clearInterval(drawTimer);
  }

  handleStop() {

  }

  render() {
    var pixels = this.generatePixels.bind(this)();
    return (
      <div>

        {this.props.arrayOfOn.join(',')}
        <div style={this.styles}>
          {pixels}
        </div>
        <button onClick={this.handleStop}>stop</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    arrayOfOn: state.devReducer.litPixels,
    litPixelIndexArray: state.displayReducer.litPixels,
    pixelsPerRow: state.displayReducer.pixelsPerRow,
    pixelDensity: state.displayReducer.pixelDensity

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPixelsPerRow: function (pixelsPerRow) {
      dispatch(actions.setPixelsPerRow(pixelsPerRow));
    },
    setPixelDensity: function (pixelDensity) {
      dispatch(actions.setPixelDensity(pixelDensity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
