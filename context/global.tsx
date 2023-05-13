import { createContext, useEffect, useState } from "react"

interface User {
    userName: String
}

export interface Co2Values {
    electricity: number,
    naturalGas: number,
    carFuel: number
    eatingStyle: EatingStyle 
}

enum EatingStyle {
    NoneSelected = 0,
    Vegan = 1059,
    Vegetarian = 1387,
    Omnivore = 2372
}

interface GlobalContextProps {
    user: User,
    co2Values: Co2Values,
    setCo2Values: (co2: Co2Values) => void,
    co2Result: number
}

export const GlobalContext = createContext<GlobalContextProps>({user: {userName: ''}, co2Values: {
    electricity: 0,
    naturalGas: 0,
    carFuel: 0,
    eatingStyle: EatingStyle.NoneSelected
}, setCo2Values: () => {}, co2Result: 0});

export const GlobalContextProvider = (props: any) => {
    let [user, setUser] = useState<User>({userName: 'Kerem Gözaydin'});
    let [co2Result, setCo2Result] = useState<number>(0);
    let [co2Values, setCo2Values] = useState({
        electricity: 0,
        naturalGas: 0,
        carFuel: 0,
        eatingStyle: EatingStyle.NoneSelected,
    });

    useEffect(() => {
        setCo2Result(co2Values.electricity + co2Values.naturalGas + co2Values.carFuel + co2Values.eatingStyle)
    },[co2Values])
    return (
        <GlobalContext.Provider value={{user, co2Values, setCo2Values, co2Result}}>
            {props.children}
        </GlobalContext.Provider>
    )
}