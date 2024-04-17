import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'

const Navbar = () => {
    const[menu,setmenu]=useState('menu')
    return (
        <div className='navbar'>
            <img src={assets.logo} alt=""  className='logo'/>
            <ul className="navbar-menu">
                <li onClick={()=>setmenu("home")} className={menu==='home'?'active':''}>Home</li>
                
                
                <li onClick={()=>setmenu("menu")} className={menu ==='menu'?'active':''}>Menu</li>
                <li onClick={()=>setmenu("mobile-app")} className= {menu ==='mobile-app'?'active':''}>Mobile-app</li>
                <li onClick={()=>setmenu("contact")} className={menu === 'contact'?'active':''}>Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className='navbar_icon'>
                    <img src={assets.bag_icon} alt='' />
                    <div className='dot'></div>
                    

                </div>
                <button> sing in</button>
            </div>
            
        </div>
    );
};

export default Navbar;