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

// Display Actions

export function updateDisplay(litPixelArray) {
  return {
    type: types.UPDATE_DISPLAY,
    value: litPixelArray
  }
}

export function setPixelDensity (pixelDensity) {
  return {
    type: types.SET_PIXELS_PIXEL_DENSITY,
    value: pixelDensity
  }
}

export function setPixelsPerRow (pixelsPerRow) {
  return {
    type: types.SET_PIXELS_PER_ROW,
    value: pixelsPerRow
  }
}

// Character Actions

export function setCurrentMonsterBlueprint(blueprint) {

  return {
    type: types.SET_MONSTER_BLUEPRINT,
    value: blueprint
  }
}

export function setNewDirection(value) {
  return {
    type: types.SET_DIRECTION,
    value: value
  }
}

export function setCurrentPosition (position){
  return {
    type: types.SET_CURRENT_POSITION,
    value: position
  }
}

export function setCurrentAnimationFrame (currentFrame) {
  return {
    type: types.SET_CURRENT_ANIMATION_FRAME,
    value: currentFrame
  }
}

