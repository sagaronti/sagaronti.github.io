import React from 'react'
import classes from './About.module.css'

import aboutImg from '../../images/about.svg'

function About() {
  return (
    <div className={classes.aboutParent}>
        <div className={classes.aboutChildOne}>
            <img src={aboutImg} alt="about" />
        </div>
        <div className={classes.aboutChildTwo}>
            <h2>About Me!</h2>
            <p>
            My name is Sagar and I am a Data Analyst/Engineer, currently living in Bangalore, India. I have a Degree in Bachelor of Computer Applications, and my primary focus and inspiration for my studies is Data Science.
            </p>
        </div>
    </div>
  )
}

export default About