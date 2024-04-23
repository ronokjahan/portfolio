import { useContext } from 'react'
import './Placeorder.css'
import { StoreContex } from '../../Contex/ContexFolder'

const PlaceOrder = () => {
    const{gettotalCartamount}=useContext(StoreContex)
    return (
        <form className='place-order'>
           
            <div className="place-order-left">
                <p className="title">
                    Delevery information
                </p>
                <div className='mulfi-filds'>
                    <input type="text" placeholder='First name' />
                    <input type="text" name="" id="" placeholder='Last name'/>

                </div>
                <input type="email" placeholder='Email adress' />
                <input type="text" placeholder='street' />
                <div className='mulfi-filds'>
                    <input type="text" placeholder='City' />
                    <input type="text" name="" id="" placeholder='Street'/>

                </div>
                <div className='mulfi-filds'>
                    <input type="text" placeholder='Zip Code' />
                    <input type="text" name="" id="" placeholder='Country'/>

                </div>
                <input type="text" placeholder='Phone'/>

            </div>
            <div className="place-order-right">
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
                    

                    <button className='buttonss' >PROCED TO PAYMENT</button>
                </div>
            
                   
                   
            </div>
           
            
        </form>
    );
};

export default PlaceOrder;