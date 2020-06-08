import React from 'react'
import {connect} from 'react-redux'

let mapStateToProps=(state)=>{
    return{
        popUp:state.app.isPopUp
    }
}

export const IsPopUpHook=(Component)=>{
    const RedirectComponent=(props)=> {
           return <Component {...props}/>
    }  
    let Connect=connect(mapStateToProps)(RedirectComponent)
    return Connect
}

