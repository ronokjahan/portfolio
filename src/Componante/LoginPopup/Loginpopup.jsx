import { useState } from 'react';
import './Loginpopup.css'
import { assets } from '../../assets/assets';

const Loginpopup = ({setshowlogin}) => {
    const[currentstat,setcurrentstat]=useState('Login')
    return (
        <div className='login-popup'>
         <from className="login-popup-conatiner">
            <div className="login-popup-title">
                <h2>{currentstat}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />


            </div>
            <div className="login-popup-input">

            </div>
            <div className='login-popups-input'>
                {currentstat ==='Login'?<></>:<input type="text"  id="" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your email' name="" id="" required />
                <input type="password" name="" id="" placeholder='Password' required />

            </div>
            <button>{currentstat ==='Sing up'?'Create account':'Login'}</button>
            <div className="login-popup-condtion">
                <input type="checkbox" name="" id="" required />
                <p>By containg , i agree to the trems of use & privacy policy</p>
            </div>
            {currentstat ==='Login'?<p>Create A New account? <span onClick={()=>setcurrentstat('Sing Up')}>Click Here</span></p>:<p>Already have Account? <span onClick={()=>setcurrentstat('Login')}>Login Here</span></p>}
            
            
            </from> 
        </div>
    );
};

export default Loginpopup;