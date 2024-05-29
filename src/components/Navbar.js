import React,{useState}from 'react';
import '../Styles/Navbar.css'
import logo from '../assets/Chef.jpg';
import { Link ,NavLink} from 'react-router-dom'
const Navbar=()=>{
  const [openMenu,setMenu]=useState('close');
  
  
  return(
    <div className="navbar">
      <div className="leftSide">
        <img  className="img" src={logo}/>
        <div class="hiddenLinks" id={openMenu ? 'open' : 'close'}>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/menu">Menu</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
        </div>

      </div>
       <div className="rightSide">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/menu">Menu</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
         <div className="hamburger" onClick={()=>{setMenu(!openMenu)}}>
         <span></span>
         <span></span>
         <span></span>
        </div>
         
       </div>

    </div>
    )
}
export default Navbar;
