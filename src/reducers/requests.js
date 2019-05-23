import {
  FETCH_REQUEST_START, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE,
  FETCH_ALL_REQUESTS_START, FETCH_ALL_REQUESTS_SUCCESS, FETCH_ALL_REQUESTS_FAILURE,
} from '../actions'

const INITIAL_STATE = {
    fetching: false,
    errors: [],
    authToken: localStorage.getItem('jwt'),

    requests: []
  };

export default function authReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case FETCH_REQUEST_START:
      case FETCH_REQUEST_SUCCESS:
      case FETCH_REQUEST_FAILURE:

      case FETCH_ALL_REQUESTS_START:
      case FETCH_ALL_REQUESTS_SUCCESS:
      case FETCH_ALL_REQUESTS_FAILURE:
      
      default:
        return state;
    }
  }