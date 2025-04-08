import React from 'react';

const SingleCategory = ({category, setSelectedCategory, activeCategory, setActiveCategory}) => {
    console.log(category)
   const {strCategory} = category
   
   const handleClick = () => {
    setSelectedCategory(strCategory);
    setActiveCategory(strCategory); // Set the clicked category as active
};



    return (
        <div>
            <div className=''>
            <button
                    onClick={handleClick}
                    className={`border-1 px-4 py-1 cursor-pointer duration-300 
                        ${activeCategory === strCategory ? 'bg-blue-600 text-white' : 'bg-blue-800 text-white'} 
                        hover:bg-green-600 hover:text-white`}
                >
                    {strCategory}
                </button>
            </div>
        </div>
    );
};

export default SingleCategory;