import { combineReducers } from 'redux';
import {
  REQUEST_LIST,
  RECEIVE_LIST,
  // SELECT_ITEM,
  REQUEST_ITEM,
  RECEIVE_ITEM
} from '../actions/types';

import RootNavigator from '../navigation/RootNavigator';

function detailReducer(state = {
  isLoading: false,
  data: {}
}, action) {
  switch (action.type) {
    // case SELECT_ITEM:
      // return { ...state, isLoadingDetails: true };
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
      return JSON.parse(JSON.stringify({ ...state, isLoadingList: true }));
    case RECEIVE_LIST:
      return JSON.parse(JSON.stringify({ ...state, isLoadingList: false, data: action.list.results }));
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  list: listReducer,
  item: detailReducer,
  navigation: (state, action) => RootNavigator.router.getStateForAction(action, state)
});

export default rootReducer;
