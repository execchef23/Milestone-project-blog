import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext()


function CurrentUserContextProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch("", {})
            // TODO fill out the rest of authorization
        
        }


    }, [])

    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUserContext.Provider>
    )
}


export default CurrentUserContextProvider;