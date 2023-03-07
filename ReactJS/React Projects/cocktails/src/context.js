import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    // for fetch date from an API by search functionality
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);
    return (
        // means display values which are states, function
        // in all App (Cocktail) so we can access them using 
        // usecontext
        <AppContext.Provider
            value={{
                loading,
                cocktails,
                setSearchTerm,
            }}
        >
            {children}
        </AppContext.Provider>)
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }