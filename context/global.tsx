import { createContext, useState } from "react"

interface User {
    userName: String
}

interface GlobalContextProps {
    user: User
}

export const GlobalContext = createContext<GlobalContextProps>({user: {userName: ''}})

export const GlobalContextProvider = (props: any) => {
    let [user, setUser] = useState<User>({userName: 'Kerem Gözaydin'});
    return (
        <GlobalContext.Provider value={{user}}>
            {props.children}
        </GlobalContext.Provider>
    )
}