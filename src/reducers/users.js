import {
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAILURE,
    UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
    DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE
} from '../actions'


const initialState = {
    fetching: false,
    errors: [],
    authToken: localStorage.getItem('jwt'),

    users: []
}


export default function userReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_USERS_START:
        case FETCH_USERS_SUCCESS:
        case FETCH_USERS_FAILURE:

        case ADD_USER_START:
        case ADD_USER_SUCCESS:
        case ADD_USER_FAILURE:

        case UPDATE_USER_START:
        case UPDATE_USER_SUCCESS:
        case UPDATE_USER_FAILURE:

        case DELETE_USER_START:
        case DELETE_USER_SUCCESS:
        case DELETE_USER_FAILURE:

        default: 
            return state
    }
}