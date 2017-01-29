import React, {Component} from 'react';
import Pixel from '../Pixel/Pixel';

import { connect } from 'react-redux';

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

  generatePixels() {

    var pixelsDensity = 10;
    var pixelsPerRow = this.styles.width / pixelsDensity;

    var totalPixels = pixelsPerRow * pixelsPerRow;
    var pixels = [];

    for (var i = 0; i < totalPixels; i++) {
      pixels.push(<Pixel key={i}
                         index={i}
                         dimentions={pixelsDensity}/>)
    }

    return pixels;

  }

  render() {
    var pixels = this.generatePixels.bind(this)();
    return (
      <div>

        {this.props.arrayOfOn.join(',')}
        <div style={this.styles}>
          {pixels}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    arrayOfOn: state.devReducer.litPixels
  }
}

export default connect(mapStateToProps)(Display);
