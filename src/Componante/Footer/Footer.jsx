import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-conatin'>
                <div className="footer-conatin-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere maxime dolor exercitationem deserunt unde sint qui id cupiditate molestiae. Reprehenderit.</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />

                    </div>

                </div>
                <div className="footer-conatin-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-conatin-right">
                    <h2>Get IN TOUCH </h2>
                    <ul>
                       <li>+1-01799378664</li>
                       <li>contuct@tamato.com</li> 
                    </ul>


                </div>
                

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ Tomato.com - All right Reserved
            </p>
        </div>
    );
};

export default Footer;