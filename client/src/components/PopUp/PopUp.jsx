import React from 'react'
import './PopUp.css'
import {isPopUp} from '../../redux/AppReducer'
import {connect} from 'react-redux'


const PopUp = (props) => {
    return (
        <div>
            <div className="popUp">
                <div onClick={()=>props.isPopUp(false)} className="popUpIcon"><img src="images/svg/cross.svg" alt="Cross" /></div>
                <div className="popUpInform">
                    <div className="popUpImg">
                        <img src="images/girl 1.png" alt="" />
                    </div>
                    <div className="popUpText">
                        <p className="popUpHeadline">We’ve got you covered, girl!</p>
                        <p className="popUpText1">Can one dress be enough? We don’t think so!<br />
                                    Rent <span>2nd</span> outfit and keep both items for <span>14 days</span>!<br />
                                        Rent <span>3rd</span> outfit and keep all 3 outfits for <span>21 days</span>!</p>
                        <p className="popUpSlogan">P.S. Great idea for vacay or an eventful month, Isn’t it?</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default connect(null,{isPopUp})(PopUp)