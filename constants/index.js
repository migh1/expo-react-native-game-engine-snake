import { Dimensions } from 'react-native';

export const MAX_WIDTH = Dimensions.get('screen').width;
export const MAX_HEIGHT = Dimensions.get('screen').height;
export const GRID_SIZE = 13;
export const CELL_SIZE = 29;

export const rightHead = { marginTop: 0, marginLeft: -(CELL_SIZE * 4) };
export const upHead = { marginTop: 0, marginLeft: -(CELL_SIZE * 3) };
export const downHead = {
  marginTop: -1 * (CELL_SIZE * 1),
  marginLeft: -(CELL_SIZE * 4),
};
export const leftHead = {
  marginTop: -1 * (CELL_SIZE * 1),
  marginLeft: -(CELL_SIZE * 3),
};
export const hBody = { marginTop: 0, marginLeft: -(CELL_SIZE * 2) };
export const vBody = {
  marginTop: -1 * (CELL_SIZE * 2),
  marginLeft: -(CELL_SIZE * 3),
};
export const tail = { marginTop: -1, marginLeft: -(CELL_SIZE * 2) };
export const fruit = {
  marginTop: -1 * (CELL_SIZE * 3),
  marginLeft: 0,
};

// Want swipe controls? Uncomment these and comment the above block
// touches
//   .filter((t) => t.type === 'move')
//   .forEach((t) => {
//     if (head && head.position) {
//       if (t.delta.pageY && t.delta.pageX) {
//         if (
//           t.delta.pageY &&
//           Math.abs(t.delta.pageY) > Math.abs(t.delta.pageX)
//         ) {
//           if (t.delta.pageY < 0 && yspeed != 1) {
//             yspeed = -1;
//             xspeed = 0;
//           } else if (t.delta.pageY > 0 && yspeed != -1) {
//             yspeed = 1;
//             xspeed = 0;
//           }
//         } else if (t.delta.pageX) {
//           if (t.delta.pageX < 0 && xspeed != 1) {
//             xspeed = -1;
//             yspeed = 0;
//           } else if (t.delta.pageX > 0 && xspeed != -1) {
//             xspeed = 1;
//             yspeed = 0;
//           }
//         }
//       }
//     }
//   });
