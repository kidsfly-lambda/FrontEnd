import axios from 'axios';

import axiosWithAuth from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD = 'ADD';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FORM_POST = 'FORM_POST';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://kidsfly.herokuapp.com/login', creds).then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
};





const baseURL = 'https://kidsfly.herokuapp.com';

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


// export const register = credentials => dispatch => {
//   dispatch({ type: REGISTER_START });
//     return axios.post( baseURL + '/register', credentials)
//     .then(res => {
//       console.log(res.data)
//       localStorage.setItem("token", res.data.token);
//       dispatch({ type: REGISTER_SUCCESS, payload: res.data }) 
//     })
//     .catch(err => {
//       dispatch({ type: REGISTER_FAILURE, payload: err});
//     })
// }



export const addUsers = user => {
    // add a user
    axios({
            method: "post",
            url: baseURL + "/register",
            data: user
        })
        .then(res => {
            this.setState({ users: res.data });
            localStorage.setItem("user", res.data);
            this.props.history.push("/");
        })
        .catch(err =>
            this.setState({
                err: "There was an issue signing up. Email or username may be taken."
            })
        )
}



export const addForm = flight => dispatch => {
    dispatch({ type: ADD })
    return axiosWithAuth().post('https://kidsfly-frontend.netlify.com/booking', flight)
        .then(({ data }) => {
            dispatch({
                type: FORM_POST,
                payload: data
            })
        })
}



















// export const addUsers = smurf => {
//     return dispatch => {
//         dispatch({ type: ADD });
//         axios.post(baseURL, smurf)
//             .then(() => {
//                 dispatch(fetchUsers());
//             })
//             .catch(err => {
//                 dispatch({ type: ERROR, payload: err });
//             });
//     };
// };