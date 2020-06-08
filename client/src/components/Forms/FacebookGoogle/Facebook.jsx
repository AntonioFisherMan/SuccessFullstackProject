import React from 'react'
import FacebookLoginBtn from 'react-facebook-login'
import './FacebookGoogle.css'
import {connect} from 'react-redux'
import {userLoad} from '../../../redux/AuthReducer'

class FacebookLogin extends React.Component {
    responseFacebook = (response) => {
        console.log(response);
        if (response.status !== 'unknown'){
        let user = {
            name: response.name,
            picture: response.picture.data.url
        }  
        let userData={user}
        this.props.userLoad(userData) 
    }
    }
    render() {
           
    return(
        <FacebookLoginBtn
        appId="168317654422864"
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="facebookBtn"
        icon="fab fa-facebook-square facebookIcon"
        textButton=""
    />
    )
    }
}


export default connect(null,{userLoad})(FacebookLogin)

