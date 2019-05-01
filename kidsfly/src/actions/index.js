
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD = 'ADD';


const baseURL = 'http://localhost:3333/users';

export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios.get(baseURL)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addUsers = smurf => {
  return dispatch => {
    dispatch({ type: ADD });
    axios.post(baseURL, smurf )
      .then(() => {
        dispatch(fetchUsers());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};