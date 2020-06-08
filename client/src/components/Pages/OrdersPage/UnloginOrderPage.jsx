import React from 'react'
import { connect } from 'react-redux'
import { mongoObjectId } from '../../../utils/helperFunctions/objectId'
import Button3 from '../../SiteButtons/Button3/Button3'


const Order = (props) => {
    return (
        <div>
 {props.order?   <div>
 <div className="row" >
        <div className="d-flex justify-content-center align-items-center ">
            <div style={{padding:"10px 10px",height:'500px',maxWidth:'100%',color:'white',background:'pink',textAlign:'center'}} className="col-12 d-flex justify-content-center align-items-center flex-column ">
                <div><h1 className="numberOrder" >Заказ: {mongoObjectId()}</h1><p style={{color:'black'}}>статус: processing</p></div>
                <h2>покупатель: {props.order.name}</h2>
                <h3>Адрес: {props.order.city}</h3>
                <h4>Телефон:{props.order.phone}</h4>
                <p style={{color:"#D2691E",fontSize:'16px',marginTop:'20px'}}>В ближайшее время с Вами свяжется наш менеджер</p>
            </div>
             
        </div>
        
    </div>
    <div className="row d-flex justify-content-center" style={{marginTop:'20px'}}>
                <Button3 text="to catalog" link="/catalog"/>
       </div>
        </div>:null}
        </div>
       
       
       

    )
}

let mapDispatchToProps = (state) => {
    return {
        order: state.orders.unloginOrder
    }
}


export default connect(mapDispatchToProps, {})(Order)