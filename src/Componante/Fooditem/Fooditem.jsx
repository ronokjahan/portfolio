
import { assets } from '../../assets/assets';
import './FoodItem.css'
import { useContext } from 'react';
import { StoreContex } from '../Contex/ContexFolder';

const Fooditem = ({id, name,price,description,image}) => {



const{addcart,removeFromCart,carItem
    }=useContext(StoreContex)

    return (
        <div className='food-item'>
           <div className='food-item-iamge-container'>
            <img className='food-item-iage' src={image} alt="" />
            {
            !carItem[id]?<img className='add'onClick={()=>addcart(id)} src={assets.add_icon_white} alt="" />:<div className='food-item-count'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{carItem[id]}</p>
                <img onClick={()=>addcart(id)} src={assets.add_icon_green} alt="" />


            </div>
            }
           



            
            </div> 
            <div className="food-item-info">
              <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}alt="" />
                </div> 
                <p className="food-item-description">
                    {description}
                    </p> 
                    <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default Fooditem;