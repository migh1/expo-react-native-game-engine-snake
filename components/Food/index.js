import React from 'react';
import { View } from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import * as Constants from '../../constants';

const Food = ({ size, position: [x, y] }) => {
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
        imageStyle={Constants.fruit}
      />
    </View>
  );
};

export default Food;
