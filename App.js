/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyStack from './src/Navigation/MainNavigator';
import {Provider} from 'react-redux'
import configureStore from './src/redux/configureStore';

const store = configureStore()

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
      <Provider store={store}>
        <MyStack />
    </Provider>
    </SafeAreaView>
  );
};


export default App;
