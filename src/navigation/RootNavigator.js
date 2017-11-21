import { StackNavigator } from 'react-navigation';

import List from '../Pages/List';
import Detail from '../Pages/Detail';

const routeConfig = {
  List: {
    screen: List
  },
  Details: {
    screen: Detail
  }
};

const RootNavigator = StackNavigator(routeConfig);

export default RootNavigator;
