import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useState,useEffect } from 'react';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Fish Biryani',
        description: 'Finest fish and spicee',
        price: 10,
    },
    {
        id: 'm2',
        name: 'Mutton Biryani',
        description: 'A indian specialty! spicee',
        price: 20,
    },
    {
        id: 'm3',
        name: 'Veg Pullav',
        description: 'Healthy...and green...',
        price: 30,
    },
    {
        id: 'm4',
        name: 'Kabas',
        description: 'Spicee chicken kababs',
        price: 40,
    },
];

const AvailableMeals = () => {

    const [mealsItemsList,setMealsItemsList]=useState([]);
    const [Loading,setLoading]=useState(true);
    console.log(mealsItemsList);

    const getMealsListItems= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4515654&lng=78.3668431&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setMealsItemsList(json?.data?.cards[2]?.data?.data?.cards);
        setLoading(false);
        // console.log("json=",json);
    }

    useEffect(()=>{
        getMealsListItems();
    },[])

    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));

      const mealsListFromAPI = mealsItemsList.map((meal) =>{
        return <MealItem 
            id={meal.data.id}
            key={meal.data.id} 
            name={meal.data.name}
            price={meal.data.feeDetails.amount} 
        />
    });

    return (
        <section className={classes.meals}>
            <Card>
                {/* <ul>{mealsList}</ul> */}
                {Loading ?<ul style={{textAlign:"center"}}>Hold on! Menu is Loading...</ul> :<ul>{mealsListFromAPI}</ul>}
            </Card>
        </section>
    );
};

export default AvailableMeals;