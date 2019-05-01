
import { ERROR, FETCHING, FETCHED, ADD } from "../actions";

const initialState = {
   users: [],
   fetchingUsers: false,
   addingUser: false,
   updatingUser: false,
   deletingUser: false,
   error: null
 };




export const usersReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingUsers: true };
    case FETCHED:
      return {
        ...state,
        fetchingUsers: false,
        fetchedUsers: true,
        users: action.payload
      };
    case ADD:
      return { ...state, fetchingUsers: false, addedUser: true };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};