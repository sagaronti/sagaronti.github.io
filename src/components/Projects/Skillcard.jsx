import React from 'react'
import classes from './Skillcard.module.css'

function Skillcard(props) {
  return (
    <div className={classes.skillcard}>
        <img src={props.img} alt="demo" srcset="" />
        <h3>{props.skillname}</h3>
    </div>
  )
}

export default Skillcard