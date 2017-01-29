import * as types from '../Actions/Types';

const state = {
  litPixels : [],
  pixelsPerRow: 0,
  pixelDensity: 0
};

export default function displayReducer (initialState, action ) {
  initialState = initialState || state;

  let newState = Object.assign({}, initialState);

  if(action.type === types.UPDATE_DISPLAY){
    const pureLitPixelArray = action.value.map(i => {return i});
    newState.litPixels = pureLitPixelArray;
  }
  else if(action.type === types.SET_PIXELS_PER_ROW){
    newState.pixelsPerRow = action.value
  }
  else if (action.type === types.SET_PIXELS_PIXEL_DENSITY){
    newState.pixelDensity = action.value
  }

  return newState;

}