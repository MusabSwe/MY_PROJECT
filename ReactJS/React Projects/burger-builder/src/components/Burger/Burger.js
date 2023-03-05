import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    // when you pass an object and you can not loop through it
    // using map function since it is an objet
    // so we use Object keys to convert object to arrays
    // console.log("here", props.ingredients);
    let trasformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            // To transform string value into array
            // and for each element iterate according to the number
            // for exampel
            // ingredients: {
            //     salad: 1, iterate once & create one element
            //     bacon: 1, iterate once & create one element
            //     cheese: 2, iterate twice & create 2 element
            //     meat: 2 iterate twice & create 2 element
            // }
            return [...Array(props.ingredients[igkey])].map((_, index) => {
                return <BurgerIngredient key={igkey + index} type={igkey} />;
            });
            // arr --> prev element
            // el --> current element
        }).reduce((arr, el) => {
            // To add all ingrediens in a single value and 
            // check if burger ingredients are empty or not
            // if it is empty display a message
            return arr.concat(el);
        }, []);
    if (trasformedIngredients.length === 0) {
        trasformedIngredients = <p>please start adding ingredients!</p>
    }
    console.log(trasformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trasformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;