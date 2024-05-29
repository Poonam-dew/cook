import React from 'react';
import '../Styles/About.css';
import KhoyaSamosa from '../assets/KhoyaSamosa.jpg';
const About=()=>{
  return(
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${KhoyaSamosa})`}}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          It isn’t enough to just market your product to consumers. You need to earn their trust too.

One way to do this is by explaining who you are and what your company is about. The easiest and most effective way to achieve this is with an About Us page.

You’ve probably stumbled on a bunch of About Us pages, but how do you know which ones are most effective?

In this post, we’ll share some of the most effective About Us pages for specific niches and explain why they are so impactful.

Before we dive in, let’s look at an overview of About Us pages and dissect a commonly-used template for them.
        </p>
      </div>      
    </div>
    )
}
export default About;