import React from 'react'
import styles from './Button3.module.css'
import {Link} from 'react-router-dom'
const Button3 = (props) => {
    return (
        <Link to={props.link} className={styles.button}>
            <i className="carousel-control-prev-icon fas fa-chevron-left" aria-hidden="true"></i>
            <p style={{color:props.color}}>{props.text}</p>
        </Link>
    )
}
export default Button3