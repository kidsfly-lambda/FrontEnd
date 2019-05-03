import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:3333/login', creds).then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
};


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
        axios.post(baseURL, smurf)
            .then(() => {
                dispatch(fetchUsers());
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};