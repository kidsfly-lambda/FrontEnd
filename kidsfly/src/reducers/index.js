import { ERROR, FETCHING, FETCHED, ADD, LOGIN_START, LOGIN_SUCCESS, FORM_POST } from "../actions";

const initialState = {
    users: [],
    fetchingUsers: false,
    addingUser: false,
    updatingUser: false,
    deletingUser: false,
    loggingIn: false,
    error: null,
    flights: []
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
        case FORM_POST:
            return {...state, flights: [...state.flights, action.payload] }
        default:
            return state;
    }
};