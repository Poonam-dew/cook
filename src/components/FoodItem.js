import React from 'react';
const FoodItem=({image ,name ,price})=>{
  return(
  <div className="foodItem">
    <div class="foodImage" style={{backgroundImage:`url(${image})`}}></div>
    <h1>{name}</h1>
    <p>₹{price}</p>
  </div>
  )
}
export default FoodItem;