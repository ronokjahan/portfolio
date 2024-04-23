import { assets } from '../../assets/assets';
import './Appdownlode.css'

const Appdownlode = () => {
    return (
        <div className='appdownlode' id='app-downlode'>
            <h2>Foe Better Expreance Downlode 

            <br />Tomato App
            </h2>
            <div className="app-downlode-platfrom">
                <img src={assets.app_store} alt="" />
                <img src={assets.play_store} alt="" />
            </div>
            
            
        </div>
    );
};

export default Appdownlode;