import React from 'react'
// to access [searchTerm, setSearchTerm]
/*const AppContext = React.createContext()
const AppProvider = ({ children }) => {y
    const [searchTerm, setSearchTerm] = useState('a');
    return (
        <AppContext.Provider
            value={{
                loading,
                searchTerm,
                cocktails,
                setSearchTerm,
            }} */
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    
    return (
        <div>
            <h2>search form component</h2>
        </div>
    )
}

export default SearchForm