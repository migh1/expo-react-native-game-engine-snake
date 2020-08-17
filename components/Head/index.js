import React from 'react';
import { View } from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import * as Constants from '../../constants';

const Head = ({ size, position: [x, y], xspeed, yspeed }) => {
  const getHeadPosition = () => {
    if (xspeed === -1) {
      return Constants.leftHead;
    } else if (xspeed === 1) {
      return Constants.rightHead;
    } else if (yspeed === -1) {
      return Constants.upHead;
    } else if (yspeed === 1) {
      return Constants.downHead;
    }
  };

  return (
    <View
      style={{
        width: size,
        height: size,
        position: 'absolute',
        left: x * size,
        top: y * size,
      }}
    >
      <SpriteSheet
        source={require('../../assets/snake-sprites.png')}
        columns={5}
        rows={4}
        width={size}
        imageStyle={getHeadPosition()}
      />
    </View>
  );
};

export default Head;
