
import './ExpolarMenu.css'
import { menu_list } from '../../assets/assets';
const ExpolarMenu = ({catagory,setcatagory}) => {
    console.log(catagory);
    
    return (
        <div className='exploer-menu' id='exploer-menu' >
            <h1>Explor Our Menu</h1>
            <p className='expoler-menu-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum atque sequi magni aut! Doloremque repudiandae magni voluptates facere rem!
            </p>
            <div className='expolar-menu-list'>
                {
                    menu_list.map((item,index)=>{
                        return (
                          <div onClick={()=>setcatagory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} 
                          
                          className='expolar-menu-item'>
                            <img className={catagory===item.menu_image?'active':''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                          </div>  
                        )
                    })
                }

            </div>
            <hr />
        </div>
    );
};

export default ExpolarMenu;