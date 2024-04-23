import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContex } from '../Contex/ContexFolder';

const Navbar = ({setshowlogin}) => {
    const[menu,setmenu]=useState('menu')
    const{gettotalCartamount}=useContext(StoreContex)
    return (
        <div className='navbar'>
          <Link to='/'>  <img src={assets.logo} alt=""  className='logo'/></Link>
            <ul className="navbar-menu">
                <Link to='/'>
                <li onClick={()=>setmenu("home")} className={menu==='home'?'active':''}>Home</li>
                
                </Link>
                
                
               
               <a href='#exploer-menu' onClick={()=>setmenu("menu")} className={menu ==='menu'?'active':''}>Menu</a>
              
                <a href='#app-downlode'  onClick={()=>setmenu("mobile-app")} className= {menu ==='mobile-app'?'active':''}>Mobile-app</a>
                <a href='#footer' onClick={()=>setmenu("contact")} className={menu === 'contact'?'active':''}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className='navbar_icon'>
                    <Link to='/cart'>
                    <img src={assets.bag_icon} alt='' />
                    </Link>
                    <div className={gettotalCartamount()===0?'':'dot'}></div>
                    

                </div>
                <button onClick={()=>setshowlogin(true)}> sing in</button>
            </div>
            
        </div>
    );
};

export default Navbar;