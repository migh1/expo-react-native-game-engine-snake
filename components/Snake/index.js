import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import * as Constants from '../../constants';
import GameLoop from '../GameLoop';
import Head from '../Head';
import Food from '../Food';
import Tail from '../Tail';
import { randomBetween } from '../../utils/randomBetween';

const Snake = () => {
  const [engine, setEngine] = useState();
  const [running, setRunning] = useState(true);

  const boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;

  const eventHandler = (e) => {
    if (e.type === 'game-over') {
      setRunning(false);
      Alert.alert('Game Over', 'Teu joguin acabo', [
        { text: 'Blz', onPress: () => {} },
      ]);
    }
  };

  const resetHandler = () => {
    engine.swap({
      head: {
        position: [0, 0],
        xspeed: 1,
        yspeed: 0,
        updateFrequency: 10,
        nextMove: 10,
        size: Constants.CELL_SIZE,
        renderer: <Head />,
      },
      food: {
        position: [
          randomBetween(0, Constants.GRID_SIZE - 1),
          randomBetween(0, Constants.GRID_SIZE - 1),
        ],
        size: Constants.CELL_SIZE,
        renderer: <Food />,
      },
      tail: {
        elements: [],
        size: Constants.CELL_SIZE,
        renderer: <Tail />,
      },
    });
    setRunning(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <GameEngine
        ref={(ref) => setEngine(ref)}
        systems={[GameLoop]}
        running={running}
        onEvent={eventHandler}
        style={{
          width: boardSize,
          height: boardSize,
          flex: null,
          backgroundColor: '#fff',
        }}
        entities={{
          head: {
            position: [0, 0],
            xspeed: 1,
            yspeed: 0,
            updateFrequency: 10,
            nextMove: 10,
            size: Constants.CELL_SIZE,
            renderer: <Head />,
          },
          food: {
            position: [
              randomBetween(0, Constants.GRID_SIZE - 1),
              randomBetween(0, Constants.GRID_SIZE - 1),
            ],
            size: Constants.CELL_SIZE,
            renderer: <Food />,
          },
          tail: {
            elements: [],
            size: Constants.CELL_SIZE,
            renderer: <Tail />,
          },
        }}
      />
      <Button title='New Game' onPress={resetHandler} />
      <View style={styles.controls}>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => engine.dispatch({ type: 'move-up' })}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => engine.dispatch({ type: 'move-left' })}
          >
            <View style={styles.control} />
          </TouchableOpacity>
          <View style={[styles.control, { backgroundColor: null }]} />
          <TouchableOpacity
            onPress={() => engine.dispatch({ type: 'move-right' })}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => engine.dispatch({ type: 'move-down' })}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: 'column',
  },
  controlRow: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Snake;
