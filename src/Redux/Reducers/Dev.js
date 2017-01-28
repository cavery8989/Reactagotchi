import * as types from '../Actions/Types';
const state = {
  litPixels: []
};

function DevReducer(initialState, action) {
  initialState = initialState || state;

  let newState = Object.assign({}, initialState);

  if(action.type === types.ADD_TO_LIT_PIXEL_ARRAY){
    let newPixelArray = newState.litPixels.slice();
    newPixelArray.push(action.value);
    newState.litPixels = newPixelArray;
  }
  else if(action.type === types.REMOVE_FROM_LIT_PIXEL_ARRAY){
    let newPixelArray = newState.litPixels.slice();
    newPixelArray = newPixelArray.splice(action.value,1);
    newState.litPixels = newPixelArray;
  }
}

export default DevReducer;