import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: any, setError: (error: string | null) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim() !== '' || name !== ' ') {
        addUserCallback(name);
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError: (error: string | null) => void) => { // если имя пустое - показать ошибку
    if (name.trim() == '' ) {
        setError('Ошибка! Введите имя!')
    } else {
        setError('')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLDivElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any

    const [error, setError] = useState<string | null>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const newName = e.currentTarget.value
        setName(newName) // need to fix
        error && setError('')
    }

    const addUser = () => {
        if (name.trim() !== '' || name !== '') {
            pureAddUser(name, setError, setName, addUserCallback)
        }else {
            setError('Ошибка! Введите имя!')
        }

    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (name.trim() !== '') {
            pureOnEnter(e, addUser)
        }
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length - 1].name : ''  // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer


//---------------------------------------------------------------------------------------------

// import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
// import Greeting from './Greeting'
// import { UserType } from './HW3'
//
// type GreetingContainerPropsType = {
//     users: any // need to fix any
//     addUserCallback: any // need to fix any
// }
//
// export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
//     // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
// }
//
// export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
// }
//
// export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
// }
//
// // более простой и понятный для новичков
// // function GreetingContainer(props: GreetingPropsType) {
//
// // более современный и удобный для про :)
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
//                                                                      users,
//                                                                      addUserCallback,
//                                                                  }) => {
//     // деструктуризация пропсов
//     const [name, setName] = useState<any>('') // need to fix any
//     const [error, setError] = useState<any>('') // need to fix any
//
//     const setNameCallback = (e: any) => { // need to fix any
//         setName('some name') // need to fix
//
//         error && setError('')
//     }
//     const addUser = () => {
//         pureAddUser(name, setError, setName, addUserCallback)
//     }
//
//     const onBlur = () => {
//         pureOnBlur(name, setError)
//     }
//
//     const onEnter = (e: any) => {
//         pureOnEnter(e, addUser)
//     }
//
//     const totalUsers = 0 // need to fix
//     const lastUserName = 'some name' // need to fix
//
//     return (
//         <Greeting
//             name={name}
//             setNameCallback={setNameCallback}
//             addUser={addUser}
//             onBlur={onBlur}
//             onEnter={onEnter}
//             error={error}
//             totalUsers={totalUsers}
//             lastUserName={lastUserName}
//         />
//     )
// }
//
// export default GreetingContainer


