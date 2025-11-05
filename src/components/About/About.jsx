import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpeg'

const About = () => {
  return (
    <div id='about Me' className='about'>
      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* About Content */}
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I'm Lathusan, a Data Scientist and Backend Developer.</p>
            <p>I’m currently an undergraduate Software Engineering student passionate about creating efficient, data-driven solutions.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
             <div className="about-skill"><p>Tailwind CSS</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>React.js</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>Node.js</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>mongoDb</p><hr style={{ width: "90%" }} /></div>
           <div className="about-skill"><p>Python</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>PowerBI</p><hr style={{ width: "80%" }} /></div>
           
          </div>
        </div>
      </div>

      
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
          
        </div>
<hr/>
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
            
        </div>
<hr/>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
            
        </div>
      </div>
    </div>
  )
}

export default About
