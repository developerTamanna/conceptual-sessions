import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const LoadButton = ({setSelectedCategory}) => {

   const  [categories, setCateGories] =useState([])
   const [activeCategory, setActiveCategory] = useState(''); 
   console.log(categories)
    useEffect(()=>{

        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setCateGories(data.categories))

    },[])
    return (
        <div className=''>
              <div className='flex gap-2 mt-20 justify-center flex-wrap border-1 border-gray-300 py-4'>
                {
                    categories.map(category => <SingleCategory
                     key={category.idCategory}
                     category ={category}
                     setSelectedCategory ={setSelectedCategory}

                     activeCategory={activeCategory}
                     setActiveCategory={setActiveCategory}
                    ></SingleCategory>)
                }
              </div>
        </div>
    );
};

export default LoadButton;