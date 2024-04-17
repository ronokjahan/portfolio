import { Outlet } from "react-router-dom";
import Navbar from "./Componante/Navbar/Navbar";
import Footer from "./Componante/Footer/Footer";


const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;