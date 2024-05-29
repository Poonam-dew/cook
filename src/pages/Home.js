import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import BgImg from '../assets/Samosaa.jpg';
const Home=()=>{
  return (
    <div className="home">
      <div className='headerContainer' style={{backgroundImage:`url(${BgImg})`}}>
        <div className="content">
        <h2>MASTER CHEF'S SAMOSA</h2>
        <p>...Sabse jyada tasty...</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
        </div>


      </div>
      
    </div>
    
    )
}
export default Home;