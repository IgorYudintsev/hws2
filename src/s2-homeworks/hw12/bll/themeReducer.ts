const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): {themeId: number} => {
    switch (action.type) {
        case'SET_THEME_ID':{
            return {...state,themeId:action.id}
        }

        default:
            return state
    }
}

type changeThemeIdType= {
    type:string
    id:number
}

export const changeThemeId = (id: number): changeThemeIdType => {
    return{
        type: 'SET_THEME_ID', id
    }
}


//-------------------------------------------------
// const initState = {
//     themeId: 1,
// }
//
// export const themeReducer = (state = initState, action: any): any => { // fix any
//     switch (action.type) {
//         // дописать
//
//         default:
//             return state
//     }
// }
//
// type
// export const changeThemeId = (id: number): any => {}({ type: 'SET_THEME_ID', id }) // fix any
