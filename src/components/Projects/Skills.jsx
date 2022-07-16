import React from 'react'
import Skillcard from './Skillcard'

import classes from './Skills.module.css'
import hadoop from '../../images/hadoop.svg'
import spark from '../../images/apache-spark-5.svg'
import mysql from '../../images/mysql-3.svg'
import hive from '../../images/hive.png'
import aws from '../../images/aws-2.svg'
import python from '../../images/python-5.svg'


function Skills() {
  return (
    <div className={classes.skillParent}>
        <h1>My Skills!</h1>
        <div className={classes.skillChild}>
            <Skillcard img={hadoop} skillname="Hadoop"/>
            <Skillcard img={spark} skillname="Spark"/>
            <Skillcard img={hive} skillname="Hive"/>
            <Skillcard img={mysql} skillname="MySql"/>
            <Skillcard img={python} skillname="Python"/>
            <Skillcard img={aws} skillname="AWS"/>
        </div>
    </div>
  )
}

export default Skills