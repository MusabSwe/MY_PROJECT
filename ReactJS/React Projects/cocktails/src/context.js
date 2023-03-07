import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    // for fetch date from an API by search functionality
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = async () => {
        // during fetch
        // we put it here since we will use it multiple time 
        // when we search
        setLoading(true);
        try {

            // when we search fetch from an API 
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json();
            const { drinks } = data;
            // console.log(drinks);
            if (drinks) { //drinks not null
                // Display a list of drinks
                const newDrinks = drinks.map((drink) => {
                    const
                        {
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic,
                            strGlass
                        } = drink;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newDrinks)

            } else { // drinks = null
                setCocktails([]);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {

        fetchDrinks();

    }, [searchTerm])

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