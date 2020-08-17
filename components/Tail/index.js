import React from 'react';
import { View } from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import * as Constants from '../../constants';

const Tail = ({ elements, size }) => {
  let tailList = elements.map((el, idx) => {
    const getTailPosition = () => {
      if (el.xspeed === -1) {
        return Constants.hBody;
      } else if (el.xspeed === 1) {
        return Constants.hBody;
      } else if (el.yspeed === -1) {
        return Constants.vBody;
      } else if (el.yspeed === 1) {
        return Constants.vBody;
      }
    };
    return (
      <View
        key={idx}
        style={{
          width: size,
          height: size,
          position: 'absolute',
          left: el[0] * size,
          top: el[1] * size,
        }}
      >
        <SpriteSheet
          source={require('../../assets/snake-sprites.png')}
          columns={5}
          rows={4}
          width={size}
          imageStyle={getTailPosition()}
        />
      </View>
    );
  });
  return (
    <View
      style={{
        width: Constants.GRID_SIZE * size,
        height: Constants.GRID_SIZE * size,
      }}
    >
      {tailList}
    </View>
  );
};

export default Tail;
