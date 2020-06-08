import React from 'react'
import './FeedbackPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../common/FormsControls/Textarea'
import { Link } from 'react-router-dom'
import UploadFile from '../../common/UploadFile/UploadFile'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'
import { required } from '../../../utils/Validators/validators'
import { figureOutDate } from '../../../utils/helperFunctions/figureOutDate'
import { Button1 } from '../../SiteButtons/Button1/Button1'

const FeedbackPage = (props) => {
    const goodsId = props.match.params.id;
    const removeItem = () => {
        props.clearReview()
    }
    const onSubmit = (data) => {
        let formData = new FormData();
        if (data.images) {
            for (var i = 0; i < data.images.length; i++) {
                formData.append("file", data.images[i])
            }
        }
        formData.append("itemText", data.feedbackTextarea)
        props.setReviews(formData, goodsId);
    }
    return (
        <div>
            <HeaderBottom />
            <section className="feedbackBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Profile" />
                        </div>
                    </div>
                    <div className="feedbackInform">
                        <div>
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>

                        {props.success && props.success.message ? <SuccessMessage message={props.success.message} /> : props.review.length > 0 ?
                            <div className="feedbackList">
                                <div className="returnLinks">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-3">
                                            </div>
                                            <div className="col-4">
                                                <p>Item</p>
                                            </div>
                                            <div className="col-5 d-flex justify-content-center">
                                                <p>Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {props.review.map(item => <div className="feedbackItem">

                                    <div className="container">

                                        <div className="row">
                                            <div className="col-3">
                                                <img className="feedbackItemImg" src={item.photos ? item.photos.middle : item.photo} alt="" />
                                            </div>
                                            <div className="col-5">
                                                <p className="detailsListSlogan">{item.style} DRESS</p>
                                                <div className="bagCard__list">
                                                    <p>A perfect flirty number for Balls and Black Tie.</p>
                                                </div>
                                                <div className="bagCard__size d-flex">
                                                    <p>{item.size ? <>Size:{item.size}</> : null}</p>

                                                    <img src="images/svg/Vector (11).svg" alt="" />
                                                </div>
                                                <p className="bagCard__p">{item.startDate ? <>Rental period* : {figureOutDate(item.startDate, item.endDate)} days</> : null}</p>
                                                <p>{item.startDate ? <>Dates : { item.startDate } - { item.endDate }</>:null} </p>
                                                <p className="feedbackItemText">Show others how this outfit looks on you!
                                            <br />
                                            Upload pictures here</p>


                                            </div>
                                            <div className="col-4">

                                                <div className="feedbackItemColumn2">
                                                    <img onClick={() => { removeItem() }} src="/images/svg/Vector (14).svg" alt="" className="ml-auto" />
                                                    <div className="stars">
                                                        <i className="far fa-star stars__out">
                                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                        </i>
                                                        <i className="far fa-star stars__out">
                                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                        </i>
                                                        <i className="far fa-star stars__out">
                                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                        </i>
                                                        <i className="far fa-star stars__out">
                                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                        </i>
                                                        <i className="far fa-star stars__out">
                                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                        </i>
                                                    </div>
                                                    <div>
                                                        <p className="feedbackItemGrey">Rate your rented outfit.<br />
                                                    Let others know what you think!</p>
                                                    </div>
                                                    <p>Review</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                                <ReduxFeedbackForm errors={props.errors} onSubmit={onSubmit} />
                            </div>
                            : <div className="row justify-content-center  align-items-center" style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">Выберите товар для отзыва в вашых заказах<Link style={{ color: 'grey' }} to={"/orders"}>orders</Link>или каталоге товаров<Link style={{ color: 'grey' }} to={"/catalog"}>catalog</Link></h4> </div>}

                        {props.success && props.success.message ? <SuccessMessage message={props.success.message} /> : props.review.length > 0 ? <>
                            {props.review.map(item => <div>
                                <div className="row feedbackList-active" >
                                    <div className="col-3 returnItem-active">
                                        <p style={{ minHeight: '250px' }}>Item</p>
                                        <p className="d-flex align-items-start"style={{ minHeight: '150px ' }}>Rate</p>
                                    </div>
                                    <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>
                                        <div className="d-flex" style={{ minHeight: '250px !important' }}>
                                            <div>
                                                <img src={item.photos ? item.photos.middle : item.photo} alt="" />
                                            </div>
                                           
                                            <div>
                                            <img className="ml-auto" onClick={() => { removeItem(item._id) }} src="/images/svg/Vector (14).svg" alt="" />
                                                <p className="detailsListSlogan">{item.style} DRESS</p>
                                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                                <div className=" d-flex">
                                                    <p>Size:{item.size}</p>

                                                    <img src="images/svg/Vector (11).svg" alt="" />
                                                </div>
                                                <p>Rental period* : {figureOutDate(item.startDate, item.endDate)} days</p>
                                                <p>Dates: {item.startDate}-{item.endDate} </p>
                                            </div>

                                        </div>

                                        <div className="feedbackItemColumn2" style={{ minHeight: '250px !important', display: 'flex', justifyVontent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <div className="stars">
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                </i>
                                            </div>
                                            <div>
                                                <p className="feedbackItemGrey">Rate your rented outfit.<br />
                                            Let others know what you think!</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row feedbackItem-active">
                                    <div className="col-12 d-flex align-items flex-column">
                                        <ReduxFeedbackForm errors={props.errors} onSubmit={onSubmit} />
                                    </div>
                                </div>
                            </div>)}

                        </> : null}
                    </div>
                </div>
            </section>
        </div>
    )
}


const FeedbackForm = (props) => {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
                <form onSubmit={props.handleSubmit} className="feedbackForm">
                    <UploadFile name={"images"} />
                    <div className="feedbackFormSubmit">
                        <Field validate={[required]} component={Textarea} className="form-control" id="feedbackForm2-textarea" name="feedbackTextarea" />

                        <Button1 className="ml-auto">
                            Send
                </Button1>
                    </div>
                </form>
                {props.errors && props.errors.id === 'ERRORS_FILE_UPLOAD' ? <ErrorMessage message={props.errors.message} /> : null}
            </div>
        </div>
    )
}
export const ReduxFeedbackForm = reduxForm({
    form: 'feedback'
})(FeedbackForm)

export default FeedbackPage
