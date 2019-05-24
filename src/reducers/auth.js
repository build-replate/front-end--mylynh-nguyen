import {
    LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
    REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
    LOGOUT_USER 
} from '../actions';
import jwtDecode from 'jwt-decode';


const INITIAL_STATE = (token => ({
    loggedIn: false,  
    isAuthenticating: null,
    currentUser: token ? jwtDecode(token) : null,
    errors: []
}))( localStorage.getItem('jwt'))

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
                loggedIn: false,
                isAuthenticating: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                isAuthenticating: false,
                currentUser: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loggedIn: false,
                isAuthenticating: false,
                errors: action.payload
            }


        case REGISTER_USER_START:
        case REGISTER_USER_SUCCESS:
        case REGISTER_USER_FAILURE:
      
        default:
            return state;
  }
}
