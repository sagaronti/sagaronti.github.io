import React from 'react'
import Nav from './Nav'

import classes from './Home.module.css'
import homeImg from '../../images/home.svg'

function Home() {
  return (
    <React.Fragment>
        <Nav />
        <div className={classes.homeParent}>
            <div className={classes.homeChildOne}>
                <h1>Hi, This is <span className={classes.myName}>Sagar</span></h1>
                <h2>Data Analyst/Engineer</h2>
            </div>
            <div className={classes.homeChildTwo}>
                <img src={homeImg} alt="Home" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Home