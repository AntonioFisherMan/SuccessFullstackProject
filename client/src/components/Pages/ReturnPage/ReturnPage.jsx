import React from 'react'
import './ReturnPage.css'
import Sidebar from '../../Sidebar/Sidebar'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button3 from '../../SiteButtons/Button3/Button3'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'

const ReturnPage = () => {
    return (
        <div>
            <HeaderBottom />

            <section className="returnBlock">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                                <SiteHeadline text="My return" />
                            </div>
                    </div>
                    <div className="returnInform">
                        <div>
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="row">
                                <div className="col-12 col-lg-10">
                                    <div className="returnText">
                                        <p><span> Return is included in your order!</span> <br />
                                        In your box you will find a pre-payed return label that you need to place on
                                        your box
                                        and drop off at the nearest post office.
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="returnLinks">
                                <div className="container">
                                    <div className="row  d-flex align-items ">
                                        <div className="col-4">
                                            <p>Item</p>
                                        </div>
                                        <div className="col-2 ">
                                            <p>Order NO.</p>
                                        </div>
                                        <div className="col-2">
                                            <p>Returns NO.</p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">Status</div>
                                    </div>
                                </div>
                            </div>

                            <div className="returnItem">
                               
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="bagCard__slogan">maxi DRESS</p>
                                            <div className="bagCard__list">
                                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                            </div>
                                            <div className="bagCard__size d-flex">
                                                <p>Size: XS</p>
                                                <img src="images/svg/Vector (11).svg" alt="" />
                                            </div>
                                            <p className="bagCard__p">Rental period* : 7 days</p>
                                            <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontSize: '12px' }}>4146567738</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontSize: '12px' }}>9tmlAIDfmx8B</p>
                                        </div>
                                        <div className="col-3">
                                            <div className="returnItem-column">
                                                <img src="images/svg/Vector (24).svg" alt="" />
                                                <p style={{ fontSize: '12px' }}>Return received on Mar 17, 2020</p>
                                            </div>
                                        </div>
                                    </div>
                               
                            </div>

                        </div>



                        <div className="row">
                            <div className="col-3 returnItem-active">
                                <p>Item</p>
                                <p>Order NO.</p>
                                <p>Returns NO.</p>
                                <p>Status</p>
                            </div>
                            <div className="col-9 col-lg-4 returnInform-active">
                                <div className="returnInformItem-active">

                                    <p className="bagCard__slogan">maxi DRESS</p>
                                    <div className="bagCard__list">
                                        <p>A perfect flirty number for Balls and Black Tie.</p>
                                    </div>
                                    <div className="bagCard__size d-flex">
                                        <p>Size: XS</p>
                                        <img src="images/svg/Vector (11).svg" alt="" />
                                    </div>
                                    <p className="bagCard__p">Rental period* : 7 days</p>
                                    <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                </div>


                                <p>4146567738</p>


                                <p className="d-flex align-items-end">9tmlAIDfmx8B</p>


                                <div className="returnItem-column">
                                    <img src="images/svg/Vector (24).svg" alt="" />
                                    <p>Return received on Mar 17, 2020</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                <div className="row">
                    <div className="container">
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

export default compose(WithAuthRedirect)(ReturnPage)