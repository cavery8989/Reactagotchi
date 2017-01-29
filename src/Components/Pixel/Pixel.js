import React, { Component } from 'react';
import * as actions from '../../Redux/Actions/Actions';
import { connect } from 'react-redux';

class Pixel extends Component {
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

  componentDidMount(){
    let newState = Object.assign({}, this.state);
    let newStyles = Object.assign({}, this.state.styles);
    if ( this.props.isOn){
      newStyles.backgroundColor = '#595959'
    }
    newState.styles = newStyles;
    this.setState(newState);
  }

  LightenPixel(){
    const state = Object.assign({},this.state);
    let styles = Object.assign({}, state.styles);
    if(!state.pixelOn) {
      styles.backgroundColor = '#595959';
      state.styles = styles;
      state.pixelOn = true;
      this.props.addLitPixel(this.props.index);
    }else{
      styles.backgroundColor = '#f5f5f5';
      state.styles = styles;
      state.pixelOn = false;
      this.props.removeLitPixel(this.props.index);
    }
    this.setState(state);
  }

  render(){

    return (
      <div onClick={this.LightenPixel.bind(this)} style={this.state.styles}></div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addLitPixel: function (index) {
      dispatch(actions.addLitPixel(index));
    },
    removeLitPixel: function (index) {
      dispatch(actions.removeLitPixel(index))
    }
  }
}

export default connect(null,mapDispatchToProps)(Pixel);