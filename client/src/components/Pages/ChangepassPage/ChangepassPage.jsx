import React from 'react'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import Button3 from '../../SiteButtons/Button3/Button3'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import ChangePass from '../../Forms/ChangePass/ChangePass'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'


const ChangepassPage = () => {
    return (
        <div>
            <HeaderBottom />

            <section className="changePassBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-2 col-md-3"></div>
                        <div className="col-12  col-md-5 ">
                            <ChangePass />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="returnLink">
                            <Button3 link="/catalog" text="Return to catalogue" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default compose(
    WithAuthRedirect
)(ChangepassPage) 
