import React from 'react'
import styles from './HeaderBottom.module.css'

const HeaderBottom=()=>{
    return(
        <section className={styles.linkBlock}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className={styles.linkInform}>
                            <li>Home / </li>
                            <li> All our products / </li>
                            <li> Maxi dress / </li>
                            <li> Sussex Copper Fait Maxi dress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeaderBottom