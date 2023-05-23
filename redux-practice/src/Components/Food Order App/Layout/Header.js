import mealsImage from "../../../Assets/meals.jpg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <>
            <header className={classes.header} >
                <h1>Redux-Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]} >
                <img src={mealsImage} alt="A table of delicious meals"  />
            </div>
        </>
    )
}

export default Header;