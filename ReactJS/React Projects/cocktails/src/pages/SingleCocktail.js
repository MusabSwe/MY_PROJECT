import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const res = await fetch(`${url}${id}`);
                const data = await res.json();
                console.log(data);
                if (data.drinks) {// date exist
                    //content will display in the page
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]

                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                    }
                    setCocktail(newCocktail);
                } else {// not exist
                    setCocktail(null);
                }
                setLoading(false);
            } catch (e) {
                console.log(e)
                setLoading(false);
            }
        }
        getCocktail();
    }, [id]);
    if (loading) {
        return <Loading />
    }
    if (!cocktail) {// does not exist
        return <h2>no cocktiail to display</h2>
    }
    return (
        <section>
            <Link to='/' className='btn btn-primary'>
                Back Home
            </Link>
            <h2 className='section-title'>{cocktail.name}</h2>
            <div className='drink'>
                <img src={cocktail.image} alt={cocktail.name} />
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span>
                        {cocktail.name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span>
                        {cocktail.category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span>
                        {cocktail.info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span>
                        {cocktail.glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructions :</span>
                        {cocktail.instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients</span>
                        {
                            cocktail.ingredients.map((item, index) => {
                                return item ? <span key={index}>{item}</span> : null
                            })
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail