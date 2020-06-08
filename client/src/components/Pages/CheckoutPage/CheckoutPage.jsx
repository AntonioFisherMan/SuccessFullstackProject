import React, { useEffect } from 'react'

import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import UserInformForm from './UserInformForm'
import { connect } from 'react-redux'
import {getInform,updateInform} from '../../../redux/InformReducer'




const CheckoutPage=(props)=>{
    useEffect(()=>{
        props.getInform()
    })
    const onSubmit=(data)=>{
        let inform ={data}
        props.updateInform(inform)
    }
    return(
        <div>
      <HeaderBottom/>
        <section className="checkoutBlock">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="Check Out"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                      <UserInformForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </section>
    
        </div>
    )
}

let mapStateToProps=(state)=>{
    return{
      userInform:state.inform.inform
    }
}


export default connect(mapStateToProps,{getInform,updateInform})(CheckoutPage)
