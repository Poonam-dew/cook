import React from 'react';
import '../Styles/Menu.css';
import { MenuItems } from '../Helpers/MenuItems.js';
import FoodItem from '../components/FoodItem.js';
import CheeseSamosa from '../assets/CheeseSamosa.jpg';
const Menu=()=>{
  return(
     <div className="menu" >
       <h1>Our Menu</h1>
       <div class="menuItems">
         {
           MenuItems.map((item,key)=>{
             return <FoodItem 
             key={key}
             image={item.image}
             price={item.price}
             name={item.name}/>
           })
         }

       </div>
     </div>
    )
}
export default Menu;