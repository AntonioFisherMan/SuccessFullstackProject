import React from 'react'
import GoogleLoginBtn from 'react-google-login'
import './FacebookGoogle.css'
import { userLoad,login } from '../../../redux/AuthReducer'
import { connect } from 'react-redux'

const GoogleLogin = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
        let user = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            img: response.profileObj.imageUrl,
            token:response.tokenId
        }
        let userData={user}
        props.userLoad(userData)
    }
    return (
        <GoogleLoginBtn
            clientId="566501002041-u2a7osr7ah155liop5pdd485qolqul7d.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
                <img src="images/svg/Vector (23).svg" onClick={renderProps.onClick} disabled={renderProps.disabled} alt="" className="googleIcon" />
            )}
            cookiePolicy={'single_host_origin'}
        />
    )

}

export default connect(null, {userLoad,login})(GoogleLogin)