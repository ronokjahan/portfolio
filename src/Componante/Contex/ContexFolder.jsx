import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";
import(food_list)
export const StoreContex=createContext(null)
const StoreContexProvider=(props)=>{
const [carItem,setCaritem]=useState({})
const addcart=(itemId)=>{
if(!carItem[itemId]){
    setCaritem((prev)=>({...prev,[itemId]:1}))
}
else{
    setCaritem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
}
const removeFromCart=(itemId)=>{
    setCaritem((prev)=>(
        {...prev,[itemId]:prev[itemId]-1}
    ))
}
const gettotalCartamount=()=>{
    let totalamount=0
    for(const item in carItem){
        if(carItem[item]>0){
            let iteminfo=food_list.find((product)=>product._id===item)
totalamount +=iteminfo.price*carItem[item]
        }
       
    }
    return totalamount
}




    const contexValue={
food_list,
addcart,
removeFromCart,
carItem,
gettotalCartamount


    }
    return(
        <StoreContex.Provider value={contexValue}
        >
            {props.children}


        </StoreContex.Provider>
    )
}
export default StoreContexProvider;