import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Detail extends Component {
  // static navigationOptions = {
  //   header: null
  // };

  render() {
    const back = NavigationActions.back();

    return (
      <View style={{ marginTop: 15 }}>
        <TouchableWithoutFeedback 
          onPress={() => this.props.navigation.dispatch(back)}
        >
          <View>
            <Text>Detail</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
