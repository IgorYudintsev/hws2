import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            console.log('sort')
            if(action.payload==='up'){
                return state.sort((a,b)=> a.name > b.name? 1:-1)
            }else{
                return state.sort((a,b)=> a.name < b.name? 1:-1)
            }
        }
        case 'check': {

            return state.filter((a)=> a.age>=18)
        }
        default:
            return state
    }
}
