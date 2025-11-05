import AnchorLink from 'react-anchor-link-smooth-scroll';

import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile.jpeg"

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1><span>Hi i'm Lathusan</span> Data scientist and backEnd devloper </h1>

      <p>I am an undergraduate Software Engineering student from Sri Lanka, passionate about backend development and data science.</p>


      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero