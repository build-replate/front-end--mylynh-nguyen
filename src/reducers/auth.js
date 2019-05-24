import {
    LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
    REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
    LOGOUT_USER 
} from '../actions';


const INITIAL_STATE = {
    loggedIn: false,  
  };

export default function authReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case LOGOUT_USER:
            localStorage.getItem('jwt') && localStorage.removeItem('jwt')
            return {
                ...state,
                loggedIn: false
            }
        case LOGIN_USER_START:
            return {
                ...state,
                loggedIn: false
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loggedIn: true
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loggedIn: false
            }


        case REGISTER_USER_START:
        case REGISTER_USER_SUCCESS:
        case REGISTER_USER_FAILURE:
      
        default:
            return state;
  }
}
