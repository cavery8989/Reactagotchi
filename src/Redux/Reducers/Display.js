import * as types from '../Actions/Types';

const state = {
  litPixels : [3486,3487,3488,3490,3489,3492,3491,3493,3495,3494,3496,3497,3498,3500,3499,3502,3501,3428,3368,3427,3443,3442,3382,3428,3368,3308,3309,3322,3321,3249,3189,3261,3201,3190,3070,3130,3200,3140,3080,3010,3011,2952,3079,3019,2958,2893,2894,2896,2897,2895,3073,3077,3313,3314,3315,3316,3503,3504],
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