import { Outlet } from "react-router-dom";
import Navbar from "./Componante/Navbar/Navbar";
import Footer from "./Componante/Footer/Footer";
import { useState } from "react";
import Loginpopup from "./Componante/LoginPopup/Loginpopup";


const App = () => {
  const[showlogin ,setshowlogin]=useState(false)
  return (

    <>
  {showlogin?<Loginpopup setshowlogin={setshowlogin}></Loginpopup>:<></>}
    
    <div className='app'>
    
      <Navbar setshowlogin={setshowlogin}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    
    </>
  );
};

export default App;