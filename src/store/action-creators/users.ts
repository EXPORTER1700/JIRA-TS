import {Dispatch} from "redux";
import {UserActionTypes, UsersActions} from "../../types/users";
import {IUser} from "../../types/types";

const randomColor = (id: number) => {
    switch (id % 5) {
        case (0):
            return 'red'
        case (1):
            return 'green'
        case (2):
            return 'blue'
        case (3):
            return 'yellow'
        case (4):
            return 'orange'
    }
}

export const fetchUsers = () => {
    return function (dispatch: Dispatch<UsersActions>) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => users.map((user: IUser) => ({...user, color: randomColor(user.id)})))
            .then(data => dispatch({type: UserActionTypes.ADD_MANY_USERS, payload: data}))
    }
}