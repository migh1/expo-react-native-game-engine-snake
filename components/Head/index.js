import React from 'react';
import { View } from 'react-native';

const Head = ({ size, position: [x, y] }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'red',
        position: 'absolute',
        left: x * size,
        top: y * size,
      }}
    ></View>
  );
};

export default Head;
