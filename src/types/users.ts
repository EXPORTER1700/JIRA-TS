import {IUser} from "./types";


export interface UsersState {
    users: IUser[]
}

export enum UserActionTypes {
    ADD_MANY_USERS = 'ADD_MANY_USERS'
}

export interface AddManyUsersAction {
    type: UserActionTypes.ADD_MANY_USERS
    payload: IUser[]
}

export type UsersActions = AddManyUsersAction