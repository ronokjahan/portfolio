import { useState } from 'react';
import ExpolarMenu from '../../ExpolarMenu/ExpolarMenu';
import Header from '../../Header/Header';
import './Home.css'
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import Appdownlode from '../../AppDownlode/Appdownlode';

const Home = () => {
    const [catagory ,setcatagory]=useState('All')
    return (
        <div>
            
           <Header></Header>
          <ExpolarMenu catagory={catagory} setcatagory={setcatagory} ></ExpolarMenu>
          <FoodDisplay catagory={catagory}></FoodDisplay>
          <Appdownlode></Appdownlode>
        </div>
    );
};

export default Home;