import * as types from '../Actions/Types';

const state = {
  direction: 'right',
  framePlots: [],
  totalAnimationFrames: 0,
  currentAnimationFrame: 0,
  energy: 10
};

export default function characterReducer (initialState, action){
  initialState = initialState || state;

  let newState = Object.assign({}, initialState);

  if(action.type === types.SET_DIRECTION){
    newState.direction = action.value;
  }

  return newState
}