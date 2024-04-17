import React, { useContext } from 'react';
import './FoodDisPlay.css'
import { StoreContex } from '../Contex/ContexFolder';
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ({catagory}) => {
    
    const{food_list}=useContext(StoreContex)
    return (
        <div className='food-display'>
            <h2>To dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index)=>{
                    {console.log(catagory,item.category);}
                   if(catagory==='All' || catagory===item.category){
                    return <Fooditem  key={index} id={item._id} name={item.name} description={item.description}image={item.image}
                    price={item.price}
                    
                    
                    ></Fooditem>

                   } 



                    

                })}
            </div>
            
        </div>
    );
};

export default FoodDisplay;