import { createContext, useEffect, useState } from "react"

interface User {
    userName: String
}

interface Co2Values {
    [key:string]: number | undefined,
    electricity?: number,
    naturalGas?: number,
    carFuel?: number
    eatingStyle?: EatingStyle
}

enum EatingStyle {
    Vegan = 1059,
    Vegetarian = 1387,
    Omnivore = 2372
}

interface GlobalContextProps {
    user: User,
    co2Values: Co2Values,
    setCo2Values: (co2: Co2Values) => void
}

export const GlobalContext = createContext<GlobalContextProps>({user: {userName: ''}, co2Values: {}, setCo2Values: () => {}});

export const GlobalContextProvider = (props: any) => {
    let [user, setUser] = useState<User>({userName: 'Kerem Gözaydin'});
    let [co2Values, setCo2Values] = useState({});

    useEffect(() => {
        console.log("CO2 Values: ", co2Values)
    },[co2Values])
    return (
        <GlobalContext.Provider value={{user, co2Values, setCo2Values}}>
            {props.children}
        </GlobalContext.Provider>
    )
}