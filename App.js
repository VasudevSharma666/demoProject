import React, {useReducer, useState} from 'react';
import {Alert, Button, Text, TextInput, View, StyleSheet} from 'react-native';
import Second from './src/Second';
import Third from './src/Third';

const initialState = {
  InputFile: '',
  StringCheck: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'input': {
      return {...state, InputFile: action.value};
    }
    case 'StringCheck': {
      return {...state, StringCheck: action.value};
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const checker = () => {
  //   if (state.InputFile.trim() == '') {
  //     Alert.alert('enter value first');
  //   } else {
  //     Second(state.InputFile)
  //       .then((value) =>
  //         Third(value)
  //           .then((result) => Alert.alert('Enter value is numerical ' + result))
  //           .catch((err) => Alert.alert('Enter value is not numerical ' + err)),
  //       )
  //       .catch((err) => Alert.alert('enter element is not string' + err));
  //   }
  // };

  const checker = async () => {
    if (state.InputFile.trim() == '') {
      Alert.alert('enter value first');
    } else {
      try {
        const value = await Second(state.InputFile);
        const response = await Third(value);
        Alert.alert(response);
      } catch (err) {
        Alert.alert(err);
      }
    }
  };
  return (
    <View style={styles.contaner}>
      <TextInput
        value={state.InputFile}
        onChangeText={(value) => dispatch({type: 'input', value: value})}
        style={styles.InputFiled}
      />
      <View style={styles.button}>
        <Button title="submit" onPress={checker} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputFiled: {
    borderColor: 'black',
    width: 200,
    borderWidth: 0.5,
  },
  button: {
    top: 10,
  },
});
export default App;
