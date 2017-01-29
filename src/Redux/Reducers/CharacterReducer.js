import * as types from '../Actions/Types';

const state = {
  direction: 'right',
  currentMonsterBlueprint: {},
  currentAnimationFrame: 0,
  position: 0,
  energy: 10
};

export default function characterReducer (initialState, action){
  initialState = initialState || state;

  let newState = Object.assign({}, initialState);

  if(action.type === types.SET_DIRECTION) {
    newState.direction = action.value;
  }
  else if (action.type === types.SET_MONSTER_BLUEPRINT){
    newState.currentMonsterBlueprint = action.value;
  }

  return newState
}