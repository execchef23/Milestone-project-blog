import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext()

// function CurrentUserContextProvider ({children}) {
//     const [currentUser, setCurrentUser] = useState(null)
//     useEffect(() => {
//         const getLoggedInUser = async () => {
//             let response = await fetch("", {})
//             // TODO fill out the rest of authorization 
//         }
//     }, [])

function CurrentUserContextProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const getLoggedInUser = async () => {
            // let response = await fetch("", {})
            // TODO fill out the rest of authorization
            let response = await fetch("/auth/profile", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])

    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUserContext.Provider>
    )
}


export default CurrentUserContextProvider;