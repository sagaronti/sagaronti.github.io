import React from 'react'
import classes from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailReply } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className={classes.footerParent}>
        <h3>Below you can find My Social Handles!</h3>
        <div className={classes.footerChild}>
            <a href='/'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='/'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    </div>
  )
}

export default Footer