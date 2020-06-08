import React from 'react'
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div>
            <p className={styles.sidebarText}>Menu</p>
            <div className={styles.sidebar}>
                <ul>
                    <NavLink activeStyle={{ color: "#E77E83" }} to="/orders" className={styles.sidebarItem}>
                        <img src="/images/svg/Vector (16).svg" alt="" />
                        <li>My orders</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#E77E83" }} to="/return" className={styles.sidebarItem}>
                        <img src="/images/svg/Vector (17).svg" alt="" />
                        <li>Return</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#E77E83" }} to="/inform" className={styles.sidebarItem}>
                        <img src="/images/svg/Vector (18).svg" alt="" />
                        <li>My Information</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#E77E83" }} to="/changepass" className={styles.sidebarItem}>
                        <img src="/images/svg/Vector (19).svg" alt="" />
                        <li>Change Password</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#E77E83" }} to="/feedback" className={styles.sidebarItem}>
                        <img src="/images/svg/Vector (20).svg" alt="" />
                        <li>Share Feedback</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#E77E83" }} to="/help" className={styles.sidebarItem}>
                        <img src="/images/svg/Vector (21).svg" alt="" />
                        <li>Help & Contact</li>
                    </NavLink>

                </ul>
            </div>
        </div>
    )
}


export default Sidebar