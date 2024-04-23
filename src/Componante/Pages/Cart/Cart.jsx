import { useContext } from 'react';
import './Cart.css'
import { StoreContex } from '../../Contex/ContexFolder';
import { key } from 'localforage';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { food_list,
        addcart,
        removeFromCart,
        carItem, gettotalCartamount} = useContext(StoreContex)
        const navigate=useNavigate()
    return (
        <div className='cart'>
            <div className="cart-itemas">
                <div className="caer-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {

                        if (carItem[item._id] > 0) {
                            return (


                                <div>
                                    <div className='caer-item-title cart-items-item'>
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{carItem[item._id]}</p>
                                        <p >${item.price * carItem[item._id]

                                        }</p>

                                        <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>


                                    </div>
                                    <hr />




                                </div>
                            )
                        }


                    })
                }
            </div>
            <div className='cart-bottom'>
                <div>
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                    <div className='cart-total-details'>
                        <p>subtotal</p>
                        <p>{gettotalCartamount()}</p>


                    </div>
                    <hr />
                    <div className='cart-total-deatilass'>
                        <p>Delivery Fee</p>
                        <p>{2}</p>


                    </div>
                    <hr />
                    <div className='cart-total-deatilasss'>
                        <b>Total</b>
                        <b>{gettotalCartamount()+2}</b>
                    </div>
                   
                    </div>
                </div>
                    

                    <button className='buttonss' onClick={()=>navigate('/order')}>PROCED TO CHECKOUT</button>
                </div>
                
                <div className="cart-promo-cod">
                <div>
                    <p>If you have a promo code ,Enter it here</p>
                    <div className='cart-promocode-input'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>

                    </div>
                </div>

            </div>
            </div>
            

        </div>
    );
};

export default Cart;