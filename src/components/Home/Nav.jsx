import React from 'react'
import classes from './Nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Nav() {
  return (
    <div className={classes.navParent}>
        <div className={classes.navChildOne}>
            <h2>Sagar Onti</h2>
        </div>
        <div className={classes.navChildTwo}>
            <a href='/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    </div>
  )
}

export default Nav