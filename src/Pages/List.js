import React, { Component } from 'react';
import { ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../actions/';
import Tile from '../components/Tile';

class List extends Component {
  componentWillMount() {
    this.props.fetchListIfNeeded();
  }

  displayItems() {
    return this.props.list.data.map((item, index) => (
      <Tile index={index + 1} name={item.name} url={item.url} key={item.url} />
    ));
  }

  render() {
    let view = null;
    if (!this.props.list.isLoadingList) {
      view = (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            {this.displayItems()}
          </View>
        </ScrollView>
      );
    } else {
      view = <ActivityIndicator size='large' style={styles.activityIndicator} />;
    }
    return view;
  }

}

const styles = StyleSheet.create({
  scrollView: {
    margin: 15
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})

const mapStateToProps = state => ({ list: state.list });

export default connect(mapStateToProps, Actions)(List);
