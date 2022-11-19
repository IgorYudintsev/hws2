// import {UserType} from '../HW8'
//
// type ActionType =
//     | { type: 'sort'; payload: 'up' | 'down' }
//     | { type: 'check'; payload: number }
//
// export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
//     switch (action.type) {
//         case 'sort': { // by name
//             console.log('sort')
//             if(action.payload==='up'){
//                 return state.sort((a,b)=> a.name > b.name? 1:-1)
//             }else{
//                 return state.sort((a,b)=> a.name < b.name? 1:-1)
//             }
//         }
//         case 'check': {
//             return state.filter((a) => a.age >= action.payload)
//         }
//         default:
//             return state
//     }
// }

//--------------------------------------------------

import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        // делают студенты
        case 'sort': { // by name
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter((a: any) => a.age >= action.payload)
        }
        default:
            return state
    }
}