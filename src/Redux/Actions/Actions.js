import * as types from './Types';

//Dev Actions

export function addLitPixel(index) {
  return {
    type: types.ADD_TO_LIT_PIXEL_ARRAY,
    value: index
  }
}

export function removeLitPixel(index) {
  return {
    type: types.REMOVE_FROM_LIT_PIXEL_ARRAY,
    value: index
  }
}

