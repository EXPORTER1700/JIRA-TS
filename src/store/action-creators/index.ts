import * as UserActionCreator from './users'
import * as TodoActionCreator from './todos'

export default {
    ...UserActionCreator,
    ...TodoActionCreator,
}