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
    let styles = this.state.styles;
    let color = this.props.isOn ? '#595959' : '#f5f5f5';

    styles.backgroundColor = color;
    return (
      <div onClick={this.LightenPixel.bind(this)} style={styles}></div>
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