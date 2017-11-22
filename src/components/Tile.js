import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, ImageBackground, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class Tile extends Component {
  componentWillMount() {
    // this.props.fetchItemIfNeeded(this.props.index);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigateToDetails()}>
        <View style={styles.view}>
          <ImageBackground 
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png` }}
            style={styles.image}
          >
            <ActivityIndicator size='small' style={{ flex: 1 }} />
          </ImageBackground>
          <Text style={{ fontFamily: 'Avenir' }}>{this.props.index}. {this.props.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: 100,
    width: 100
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    flex: 1
  }
});

const mapStateToProps = (state) => ({ item: state.item.data })

export default connect(mapStateToProps, Actions)(Tile);
