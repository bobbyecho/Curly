import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';

const styles = {
  counterText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  rowSpaceBetween: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
};

const CounterScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>The count is {props.number}</Text>
      <View style={styles.rowSpaceBetween}>
        <Button onPress={props.counter.increment} title="increment" />
        <Button onPress={props.counter.decrement} title="decrement" />
      </View>
      <View style={styles.rowSpaceBetween}>
        <Button onPress={props.counter.incrementAsync} title="incrementAsync" />
        <Button onPress={props.counter.decrementAsync} title="decrementAsync" />
      </View>
    </View>
  );
};

const mapState = (state) => {
  return {
    number: state.counter.number,
  };
};

const mapDispatch = ({ counter }) => ({
  counter,
});

export default connect(
  mapState,
  mapDispatch
)(CounterScreen);
