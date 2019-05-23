import {
  FETCH_REQUEST_START, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE,
  FETCH_ALL_REQUESTS_START, FETCH_ALL_REQUESTS_SUCCESS, FETCH_ALL_REQUESTS_FAILURE,
} from '../actions'

const INITIAL_STATE = {
    fetching: false,
    errors: [],
    requests: []
  };

export default function authReducer(state = INITIAL_STATE, action) {
    console.log(action.payload);
    switch(action.type) {
      case FETCH_REQUEST_START:
        return state
      case FETCH_REQUEST_SUCCESS:
        return {
          ...state, requests: "hello"
        }
      // case FETCH_REQUEST_FAILURE:
      //   return state

      case FETCH_ALL_REQUESTS_START:
        return state
      case FETCH_ALL_REQUESTS_SUCCESS:
        return {
          ...state, requests: action.payload
        }
      case FETCH_ALL_REQUESTS_FAILURE:
        return state
      
      default:
        return state;
    }
  }