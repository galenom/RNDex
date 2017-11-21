import { 
  REQUEST_LIST,
  RECEIVE_LIST,
  // SELECT_ITEM,
  REQUEST_ITEM,
  RECIEVE_ITEM
} from './types';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

export function requestList() {
  return {
    type: REQUEST_LIST
  };
}

export function receiveList(json) {
  return {
    type: RECEIVE_LIST,
    list: json
  };
}

// export function selectItem(id) {
//   return {
//     type: SELECT_ITEM,
//     id
//   };
// }

export function requestItem() {
  return {
    type: REQUEST_ITEM
  };
}

export function receiveItem(json) {
  return {
    type: RECIEVE_ITEM,
    item: json
  };
}

function fetchItem(index) {
  return (dispatch) => {
    dispatch(requestItem());
    return fetch(`${URL}${index}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveItem(json));
      });
  };
}

function shouldFetchItem(state, index) {
  return true;
}

export function fetchItemIfNeeded(index) {
  return (dispatch, getState) => {
    if (shouldFetchItem(getState(), index)) {
      return dispatch(fetchItem(index));
    }
  };
}

function fetchList() {
  return (dispatch) => {
    dispatch(requestList());
    return fetch(`${URL}?limit=151`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveList(json));
      });
  };
}

function shouldFetchList(state) {
  return !state.list.data.length > 0;
}

export function fetchListIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchList(getState())) {
      return dispatch(fetchList());
    } else {
      return Promise.resolve();
    }
  };
}
