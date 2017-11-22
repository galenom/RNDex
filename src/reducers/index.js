import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { Navigator } from '../navigation/RootNavigator';

import {
  REQUEST_LIST,
  RECEIVE_LIST,
  REQUEST_ITEM,
  RECEIVE_ITEM
} from '../actions/types';

function detailReducer(state = {
  isLoading: false,
  data: {}
}, action) {
  switch (action.type) {
    case REQUEST_ITEM:
      return { ...state, isLoadingDetails: true };
    case RECEIVE_ITEM:
      return { ...state, isLoadingDetails: false };
    default:
      return state;
  }
}

function listReducer(state = {
  isLoading: false,
  data: []
}, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return JSON.parse(JSON.stringify({
         ...state, isLoadingList: true 
      }));
    case RECEIVE_LIST:
      return JSON.parse(JSON.stringify({
        ...state, isLoadingList: false, data: action.list.results 
      }));
    default:
      return state;
  }
}

const listAction = Navigator.router.getActionForPathAndParams('List');
const listNavState = Navigator.router.getStateForAction(listAction);

function nav(state = listNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Details':
      nextState = Navigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'List':
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'List' }),
        state
      );
      break;
    default:
      nextState = Navigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

const rootReducer = combineReducers({
  list: listReducer,
  item: detailReducer,
  nav
});

export default rootReducer;
