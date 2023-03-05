import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    // when you pass an object and you can not loop through it
    // using map function since it is an objet
    // so we use Object keys to convert object to arrays
    // console.log("here", props.ingredients);
    const trasformedIngredients = Object.keys(props.ingredients)
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
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trasformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;