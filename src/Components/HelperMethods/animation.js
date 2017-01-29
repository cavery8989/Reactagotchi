function moveMonster (displayWidthInPixels ,currentDirection, monsterPixels){

  // store furthest left fo furthest right pixel based on direction.

  const modulosePixels = monsterPixels.map(pixel => pixel % displayWidthInPixels);

  // check to see if it is at the edge switching direction if it is;
  let newDirection = currentDirection;
  if(currentDirectoon === 'right' && monsterPixels.max() === displayWidthInPixels){
    newDirection = 'left';
  }
  else if(currentDirection === 'left' && monsterPixels.min() === 0){
    newDirection = 'right';
  }

  // increment or decrement all values based on required direction

  const newPixels = monsterPixels.map(pixelIndex => {
    let newIndex;
    if(newDirection === 'right'){
      newIndex = pixelIndex + 1;
    }else {
      newIndex = pixelIndex - 1;
    }

    return newIndex
  });

  // return new pixels and new direction;

  return {
    direction: newDirection,
    monsterPixels: newPixels
  }
}

