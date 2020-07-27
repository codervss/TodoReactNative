import React from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import colors from '../../globals/colors';
import {width, height} from '../../globals';
import dayjs from 'dayjs';

const SIZE = width * 0.7;
const TICK_INTERVAL = 1000;

class ClockComp extends React.Component {
  state = {
    index: new Animated.Value(0),
    tick: new Animated.Value(0),
  };

  _timer = 0;
  _ticker = 0;

  componentDidMount() {
    const current = dayjs();
    const diff = current.endOf('day').diff(current, 'second');
    const oneDay = 24 * 60 * 60;

    this._timer = oneDay - diff;
    this.state.tick.setValue(this._timer);
    this.state.index.setValue(this._timer - 30);

    this._animate();

    this._ticker = setInterval(() => {
      this._timer += 1;
      this.state.tick.setValue(this._timer);
    }, TICK_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this._ticker);
    this._ticker = null;
  }

  _animate = () => {
    Animated.timing(this.state.index, {
      toValue: this.state.tick,
      duration: TICK_INTERVAL / 2,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {index} = this.state;

    const interpolated = {
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    };

    const secondDegrees = Animated.multiply(index, 6);
    const transformSeconds = {
      transform: [{rotate: secondDegrees.interpolate(interpolated)}],
    };

    const rotateMinutes = Animated.divide(
      secondDegrees,
      new Animated.Value(60),
    );
    const transformMinutes = {
      transform: [{rotate: rotateMinutes.interpolate(interpolated)}],
    };

    const rotateHours = Animated.divide(rotateMinutes, new Animated.Value(12));
    const transformHours = {
      transform: [{rotate: rotateHours.interpolate(interpolated)}],
    };

    let degArray = []

    for(let i = 0; i < 60; ++i){
        const deg = (i * 6).toString() + 'deg'
        degArray[i] = deg
    }

    return (
      <View style={styles.container}>
        <View style={styles.bigQuadran} />

        {degArray.map((item, index) => {
            
            return(
                <View
                key={item}
            style={[
              styles.mover,
              {
                transform: [{rotate: item}],
              },
            ]}>
            <View style={styles.ticks} />
          </View>
            )
        })}

        <Animated.View style={[styles.mover, transformHours]}>
          <View style={styles.hours} />
        </Animated.View>

        <Animated.View style={[styles.mover, transformMinutes]}>
          <View style={styles.minutes} />
        </Animated.View>

        <Animated.View style={[styles.mover, transformSeconds]}>
          <View style={styles.seconds} />
        </Animated.View>

        <View style={styles.smallQuadran} />
      </View>
    );
  }
}

export default ClockComp;

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mover: {
    position: 'absolute',
    height: SIZE,
    width: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE / 2,
  },
  hours: {  
    backgroundColor: colors.royalblue,
    height: '20%',
    marginBottom: '20%',
    borderRadius: 4,
    width: 5
  },
  minutes: {
    backgroundColor: colors.royalblue,
    height: '25%',
    marginBottom: '25%',
    borderRadius: 3,
    width: 3,
  },
  seconds: {
    backgroundColor: colors.primary,
    height: '25%',
    marginBottom: '25%',
    width: 2,
    borderRadius: 42
  },
  ticks: {
    backgroundColor: colors.white,
    height: '35%',
    marginBottom: '35%',
    borderRadius: 5,
    width: 2
  },
  bigQuadran: {
    width: SIZE * 0.6,
    height: SIZE * 0.6,
    borderRadius: SIZE * 0.4,
    backgroundColor: '#fff',
    position: 'absolute',
  },
  smallQuadran: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: colors.black,
    borderWidth: 0.5,
    position: 'absolute',
  },
});
