import axios from 'axios';

export const FETCH_REQUEST_START =  "FETCH_REQUEST_START"
export const FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS"
export const FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE"

export const DELETE_REQUEST_START="DELETE_REQUEST_START"
export const DELETE_REQUEST_SUCCESS="DELETE_REQUEST_SUCCESS"
export const DELETE_REQUEST_FAILURE="DELETE_REQUEST_FAILURE"

export const FETCH_ALL_REQUESTS_START =  "FETCH_ALL_REQUESTS_START"
export const FETCH_ALL_REQUESTS_SUCCESS = "FETCH_ALL_REQUESTS_SUCCESS"
export const FETCH_ALL_REQUESTS_FAILURE = "FETCH_ALL_REQUESTS_FAILURE"

export const ADD_REQUEST_START = "ADD_REQUEST_START"
export const ADD_REQUEST_SUCCESS = "ADD_REQUEST_SUCCESS"
export const ADD_REQUEST_FAILURE = "ADD_REQUEST_FAILURE"

export const ACCEPT_REQUEST_START = "ACCEPT_REQUEST_START"
export const ACCEPT_REQUEST_SUCCESS = "ACCEPT_REQUEST_SUCCESS"
export const ACCEPT_REQUEST_FAILURE = "ACCEPT_REQUEST_FAILURE"

const BASE_URL = 'https://replate-lambda.herokuapp.com';

export const fetchRequestById = (id) => (dispatch) => {
    dispatch({type: FETCH_REQUEST_START })

    axios
        .get(`${BASE_URL}/${id}`)
        .then(res => {
            dispatch({
                type: FETCH_REQUEST_SUCCESS,
                payload: res
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_REQUEST_FAILURE,
                payload: err
            })
        })
}

export const fetchAllRequests = () => (dispatch) => {
    dispatch({ type: FETCH_ALL_REQUESTS_START })
    const request = {
        headers: {authorization:localStorage.getItem('jwt')}
    }
    axios
        .get(`${BASE_URL}/requests`, request)
        .then(res => {
            dispatch({
                type: FETCH_ALL_REQUESTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ALL_REQUESTS_FAILURE,
                payload: err
            })
        })
    }

    export const addRequest = (sentRequest) => dispatch => {
        dispatch({ type:ADD_REQUEST_START });
        const request = {
            headers: {authorization:localStorage.getItem('jwt')}
        }
        axios.post(`${BASE_URL}/requests`, sentRequest, request)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                dispatch({
                    type: ADD_REQUEST_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_REQUEST_FAILURE,
                    payload: err
                })
            console.log(err)
            })
    }

export const acceptRequest = (id) => dispatch => {
    dispatch({type: ACCEPT_REQUEST_START});
    const request = {
        headers: {authorization:localStorage.getItem('jwt')}
    }
    
    axios
      .put(`${BASE_URL}/requests/${id}`, request)
      .then(res => {
          dispatch({
              type: ACCEPT_REQUEST_SUCCESS,
              payload: {
                volunteer_assigned: id
              }
          })
      })
      .catch(err => dispatch({
          type: ACCEPT_REQUEST_FAILURE,
          payload: err
      }))
}

export const deleteRequest = (id) => dispatch => {
    dispatch({ type: DELETE_REQUEST_START});
    const request = {
        headers: {authorization:localStorage.getItem('jwt')}
    }
    axios
      .delete(`${BASE_URL}/requests/${id}`, request)
      .then(res =>{
        dispatch({
          type: DELETE_REQUEST_SUCCESS,
          payload: res.data
        })
        //see if res.data need to be specific, ignore for now
      })
      .catch(err => dispatch({
        type: DELETE_REQUEST_FAILURE,
        payload: err
      }))
  }

