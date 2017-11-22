import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import List from '../Pages/List';
import Detail from '../Pages/Detail';

const routeConfig = {
  List: { screen: List },
  Details: { screen: Detail }
};

export const Navigator = StackNavigator(routeConfig);

const RootNavigator = ({dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(RootNavigator);
