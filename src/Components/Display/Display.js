import React, {Component} from 'react';
import Pixel from '../Pixel/Pixel';

import { walkMonster, animateMonster } from '../../HelperMethods/animation';

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

    this.state = {
      pixels: []
    }
  }

  componentWillMount() {
    var pixelsDensity = 10;
    this.props.setPixelDensity(pixelsDensity);
    var pixelsPerRow = this.styles.width / pixelsDensity;
    this.props.setPixelsPerRow(pixelsPerRow);

    let currentMonster = monsters.baby;
    this.props.updateDisplay(currentMonster.framePlots[1]);
    this.props.setMonsterBlueprint(currentMonster);

  }

  componentDidMount() {

    drawTimer = setInterval(() => {
      this.runGameLoop()
    },100);

  }

  generatePixels() {

    console.log('making pixels');
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
    const pixelsPerRow = this.props.pixelsPerRow;
    const currentDisplay = this.props.litPixelIndexArray;
    const direction = this.props.monster.currentDirection;

    const currentPosition = this.props.monster.position;
    const currentAnimationFrame = this.props.monster.currentAnimationFrame;
    const nextFrameBase = this.props.monster.monsterBlueprint.framePlots[currentAnimationFrame];

    const nextFrame = animateMonster(currentPosition, nextFrameBase);

    const newDirectionAndPixels = walkMonster(pixelsPerRow,direction,nextFrame);

    const newPosition = newDirectionAndPixels.direction === 'right'? currentPosition + 1 : currentPosition - 1;
    this.props.setMonsterPosition(newPosition);

    const newFrameNumber = currentAnimationFrame < this.props.monster.monsterBlueprint.totalFrames ? currentAnimationFrame + 1 : 0;
    this.props.setCurrentAnimationFrame(newFrameNumber);
    // todo: set frame nuber then write animation function;



    this.props.updateDisplay(newDirectionAndPixels.monsterPixels);
    this.props.setMonsterDirection(newDirectionAndPixels.direction);

  }

  handleStop() {
    clearInterval(drawTimer);
  }

  render() {
    console.log('rendering');
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
    pixelDensity: state.displayReducer.pixelDensity,

    monster: {
      position: state.characterReducer.position,
      currentDirection: state.characterReducer.direction,
      currentAnimationFrame: state.characterReducer.currentAnimationFrame,
      monsterBlueprint: state.characterReducer.currentMonsterBlueprint
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPixelsPerRow: function (pixelsPerRow) {
      dispatch(actions.setPixelsPerRow(pixelsPerRow));
    },
    setPixelDensity: function (pixelDensity) {
      dispatch(actions.setPixelDensity(pixelDensity));
    },
    updateDisplay: function (litPixels) {
      dispatch(actions.updateDisplay(litPixels));
    },
    setMonsterBlueprint: function (blueprint) {
      dispatch(actions.setCurrentMonsterBlueprint(blueprint));
    },
    setMonsterDirection: function (direction){
      dispatch(actions.setNewDirection(direction));
    },
    setMonsterPosition: function (position) {
      dispatch(actions.setCurrentPosition(position));
    },
    setCurrentAnimationFrame: function (newFrame) {
      dispatch(actions.setCurrentAnimationFrame(newFrame));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
