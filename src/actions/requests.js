import axios from 'axios'

export const FETCH_REQUEST_START =  "FETCH_REQUEST_START"
export const FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS"
export const FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE"
export const DELETE_REQUEST_START="DELETE_REQUEST_START"
export const DELETE_REQUEST_SUCCESS="DELETE_REQUEST_SUCCESS"
export const DELETE_REQUEST_FAILURE="DELETE_REQUEST_FAILURE"

export const fetchRequestById = (id) => (dispatch) => {
    dispatch({type: FETCH_REQUEST_START })

    axios.get(`https://replate-lambda.herokuapp.com/requests/${id}`)
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

export const FETCH_ALL_REQUESTS_START =  "FETCH_ALL_REQUESTS_START"
export const FETCH_ALL_REQUESTS_SUCCESS = "FETCH_ALL_REQUESTS_SUCCESS"
export const FETCH_ALL_REQUESTS_FAILURE = "FETCH_ALL_REQUESTS_FAILURE"

export const fetchAllRequests = () => (dispatch) => {
    dispatch({ type: FETCH_ALL_REQUESTS_START })
    const request = {
        headers: {authorization:localStorage.getItem('jwt')}
    }
    console.log(request);
    axios.get("https://replate-lambda.herokuapp.com/requests", request)
    .then(res => {
        console.log(res.data);
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


export const deleteRequest = (id) => dispatch => {
    dispatch({ type: DELETE_REQUEST_START});
    axios
      .delete(`https://replate-lambda.herokuapp.com/users/${id}`)
      .then(res =>{
        dispatch({
          type: DELETE_REQUEST_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => dispatch({
        type: DELETE_REQUEST_FAILURE,
        payload: err
      }))
  }
