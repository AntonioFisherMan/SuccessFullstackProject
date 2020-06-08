import './NavBar.css';
import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from '../NavLogo/NavLogo'

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <NavLogo />
            <button className=" col-3 col-sm-1 navbar-toggler" id="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="navbar-toggler-icon fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav col-lg-6">
                    <li >
                        <NavLink to="/">Rent Outfits<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li >
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/catalog">Our Products</NavLink>
                    </li>
                </ul>

            </div>

            <div className="nav__cart col-2 col-sm-2 col-lg-1">
                <img src="/images/svg/Vector (4).svg" alt="Cart" />
                <NavLink activeStyle={{ color: "#E77E83" }} to="/card">{props.props.totalSizeCard === 0 ? <p>Cart</p> : <div ><i style={{ fontSize: '14px' }} className="fas fa-cart-arrow-down"></i>-{props.props.totalSizeCard}</div>}</NavLink>
            </div>
            <div className="nav__search col-2 col-sm-2 col-lg-1">
           
           {props.props.isAuth && props.props.user ? <NavLink className="d-flex flex-column align-items-center" style={{maxWidth:'40px'}}activeStyle={{ color: "#E77E83" }} to="/orders"><p>Profile</p>{props.props.user.name}</NavLink> : <>
           <img src="/images/svg/Vector (5).svg" alt=""/>
           <input placeholder="Search" style={{border:'none',width:'60px'}} />  </>}
            </div>
            <div className=" nav__account col-2 col-sm-2 col-lg-1 d-flex align-items flex-column">
                {props.props.isAuth && props.props.user ? <NavLink className="d-flex flex-column align-items-center"activeStyle={{ color: "#E77E83" }} to="/orders"><p style={{paddingTop:'5px'}}onClick={props.logout}>Logout</p></NavLink> : <NavLink activeStyle={{ color: "#E77E83" }} to="/sign"><img src="/images/svg/Vector (6).svg" className="ml-auto" alt="Account" /></NavLink>}
            </div>

        </nav>
    )

}
export default NavBar