import React from 'react';
import { View } from 'react-native';
import * as Constants from '../../constants';

const Tail = ({ elements, size }) => {
  let tailList = elements.map((el, idx) => {
    return (
      <View
        key={idx}
        style={{
          width: size,
          height: size,
          backgroundColor: '#888',
          position: 'absolute',
          left: el[0] * size,
          top: el[1] * size,
        }}
      />
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
