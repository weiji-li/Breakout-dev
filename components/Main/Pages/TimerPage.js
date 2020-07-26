import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button, //will remove once tyz includes the change
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RestButton from '../TimerUtil/RestButton';
import moment from 'moment';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

function Timer({interval}) {
  const pad = (n) => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);

  return (
    <Text style={styles.time}>
      {pad(duration.minutes()) + ':' + pad(duration.seconds())}
    </Text>
  );
}
//waiting for tyz's change please use it to replace Please flip over the phone text and Okay! Button
const TimerPage = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C8E0E1', 'white']}
        style={styles.linearGradient}>
        <Timer interval={props.Time} />
        <RestButton navigation={props.navigation} Stop={props.Stop} />
        <Text>Please Flip Over the Phone</Text>
        <Button title="Okay!" onPress={props.Start} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: (SCREEN_WIDTH * 22) / 100,
    height: (SCREEN_HEIGHT * 13) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: SCREEN_WIDTH,
  },
  time: {
    paddingBottom: (SCREEN_HEIGHT * 40) / 100,
    fontFamily: 'GillSans-Light',
    fontSize: 40,
    color: '#83ACB2',
  },
});

export default TimerPage;
