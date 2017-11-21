/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <RootNavigator />
      </Provider>
    );
  }
}
