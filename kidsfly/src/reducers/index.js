import { ERROR, FETCHING, FETCHED, ADD, LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
    users: [],
    fetchingUsers: false,
    addingUser: false,
    updatingUser: false,
    deletingUser: false,
    loggingIn: false,
    error: null
};




export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            }
        case FETCHING:
            return {...state, fetchingUsers: true };
        case FETCHED:
            return {
                ...state,
                fetchingUsers: false,
                users: action.payload
            };
        case ADD:
            return {...state, fetchingUsers: false, addedUser: true };
        case ERROR:
            return {...state, error: action.payload };
        default:
            return state;
    }
};