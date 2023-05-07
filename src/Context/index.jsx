import {createContext, useState} from "react"

export const AppContext = createContext()

export const AppDataProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState(0);
    return (
        <AppContext.Provider value={{shoppingCart, setShoppingCart}}>
            {children}
        </AppContext.Provider>
    )
}

