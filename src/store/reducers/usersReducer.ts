import {UserActionTypes, UsersActions, UsersState} from "../../types/users";

const defaultState: UsersState = {
    users: [],
}
export const usersReducer = (state = defaultState, action: UsersActions): UsersState => {
    switch (action.type) {
        case (UserActionTypes.ADD_MANY_USERS) :
            return {...state, users: [...state.users, ...action.payload]}
        default:
            return state
    }
}
