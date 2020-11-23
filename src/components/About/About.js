import React from 'react';
import './About.modules.css'
import profileImg from '../../img/profilephoto.png';
import Widgets from '../Social-widgets/Widgets'
import Skills from '../skills-display/skills-layout/Skills'


const About = () => {
  return (
    <div className='about-container'>
      <div className="about-info-container">
        <h2>Software Engineer based in Asheville, NC</h2>
        <img alt="profile" src={profileImg} />
        <p className="about-me"> Hi there! My name is Leevi Andrews and i am a Junior web developer looking to break into the Web dev world! I am completely self taught and have been studying for over a year honing my skills! I have a passion for learning and creating new things! </p>
      </div>
      <div className="widgets-container">
        <Widgets />
      </div>
      <Skills />


    </div>
  )
}

export default About;