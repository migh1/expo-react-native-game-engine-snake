import * as Constants from '../../constants';
import { randomBetween } from '../../utils/randomBetween';

const GameLoop = (entities, { touches, events, dispatch }) => {
  let {
    head: {
      xspeed,
      yspeed,
      nextMove,
      updateFrequency,
      position: [headX, headY],
      ...restHead
    },
    food: {
      position: [foodX, foodY],
      ...restFood
    },
    tail: { elements: tailElements, ...restTail },
  } = entities;

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      if (event.type === 'move-up' && yspeed !== 1) {
        yspeed = -1;
        xspeed = 0;
      } else if (event.type === 'move-down' && yspeed !== -1) {
        yspeed = 1;
        xspeed = 0;
      } else if (event.type === 'move-left' && xspeed !== 1) {
        xspeed = -1;
        yspeed = 0;
      } else if (event.type === 'move-right' && xspeed !== -1) {
        xspeed = 1;
        yspeed = 0;
      }
    }
  }

  nextMove -= 1;

  if (nextMove === 0) {
    nextMove = updateFrequency;

    if (
      headX + xspeed < 0 ||
      headX + xspeed >= Constants.GRID_SIZE ||
      headY + yspeed < 0 ||
      headY + yspeed >= Constants.GRID_SIZE
    ) {
      dispatch({ type: 'game-over' });
    } else {
      tailElements = [[headX, headY, xspeed, yspeed]]
        .concat(tailElements)
        .slice(0, -1);

      headX += xspeed;
      headY += yspeed;

      for (let i = 0; i < tailElements.length; i++) {
        if (headX === tailElements[i][0] && headY === tailElements[i][1]) {
          dispatch({ type: 'game-over' });
        }
      }

      if (headX === foodX && headY === foodY) {
        tailElements = [[foodX, foodY]].concat(tailElements);
        foodX = randomBetween(0, Constants.GRID_SIZE - 1);
        foodY = randomBetween(0, Constants.GRID_SIZE - 1);
      }
    }
  }
  return {
    head: {
      xspeed,
      yspeed,
      nextMove,
      updateFrequency,
      position: [headX, headY],
      ...restHead,
    },
    food: {
      position: [foodX, foodY],
      ...restFood,
    },
    tail: {
      elements: tailElements,
      ...restTail,
    },
  };
};

export default GameLoop;
