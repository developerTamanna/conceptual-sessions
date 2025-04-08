import React, { useState } from 'react';
import {useEffect} from 'react'
import Food from '../Food/Food';
const ShowCategoriesFood = ({selectCategory}) => {
   const [foods, setFoods]=useState([])
   console.log(foods)
    useEffect(()=>{
     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectCategory}`)
     .then(res=> res.json())
     .then(data=>setFoods(data.meals))

    },[selectCategory])
    return (
        <div className='grid grid-cols-3 gap-4 mt-20'>
           {/* {
            foods?.map(food=><div>
                <img src={food.strMealThumb} alt=""></img>
            </div>)
           } */}

           {
            foods?.map(food=><Food
            
            food={food}
            ></Food>)
           }
   
        </div>
    );
};

export default ShowCategoriesFood;