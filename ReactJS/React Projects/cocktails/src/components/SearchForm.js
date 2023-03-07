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
    // to get value of search
    const searchVal = React.useRef('');

    React.useEffect(() => {
        searchVal.current.focus();
    }, []);
    // then the value of ref from search pass
    // it to searchterm state in context.js component
    // to update API and get the result

    const searchCocktail = () => {
        setSearchTerm(searchVal.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" id="name" ref={searchVal} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm