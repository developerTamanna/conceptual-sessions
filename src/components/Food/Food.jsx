import React from 'react';

const Food = ({food}) => {

    const {strMealThumb, strMeal} = food
    return (
        <div>
             {

<div className="card bg-base-100  shadow-sm">
<figure className="px-10 pt-10">
  <img
    src={strMealThumb}
    alt="Shoes"
    className="rounded-xl" />
</figure>
<div className="card-body items-center text-center">
  <h2 className="card-title">{strMeal}</h2>

  <div className="card-actions">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
             } 
        </div>
    );
};

export default Food;