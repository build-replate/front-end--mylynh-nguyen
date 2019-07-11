import {
  FETCH_ALL_REQUESTS_START, FETCH_ALL_REQUESTS_SUCCESS, FETCH_ALL_REQUESTS_FAILURE, DELETE_REQUEST_START, DELETE_REQUEST_SUCCESS, DELETE_REQUEST_FAILURE
} from '../actions'

const INITIAL_STATE = {
    fetching: false,
    errors: [],
    requests: [],
    deletingRequest: false
  };

export default function requestsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case FETCH_ALL_REQUESTS_START:
        return {
          ...state,
          fetching: true
        }
      case FETCH_ALL_REQUESTS_SUCCESS:
        return {
          ...state, 
          fetching: false,
          requests: action.payload
        }
      case FETCH_ALL_REQUESTS_FAILURE:
        return{
          ...state,
          fetching: false,
          errors: action.payload
        }
      case DELETE_REQUEST_START:
        return {
          ...state,
          deletingRequest: true
        }
      case DELETE_REQUEST_SUCCESS:
        const { requests } = state;
        const filteredRequests = requests.filter(request => {
              return request.id != action.payload;
        });
         
        return {
          ...state,
          deletingRequest: false,
          requests: [ ...filteredRequests ]
        }
      case DELETE_REQUEST_FAILURE:
        return {
          ...state,
          deletingRequest: false,
          errors: action.payload
        }
      default:
        return state;
    }
  }