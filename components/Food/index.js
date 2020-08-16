import React from 'react';
import { View } from 'react-native';

const Food = ({ size, position: [x, y] }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'green',
        position: 'absolute',
        left: x * size,
        top: y * size,
      }}
    ></View>
  );
};

export default Food;
