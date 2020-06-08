import React from 'react'
import './404.css'
import {Link} from 'react-router-dom'

const NotFoundPage=({ location })=>{
    return(

            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be foundNo match found for <code>{location.pathname}</code></h2>
                    </div>
                    <Link to="/">Go TO Homepage</Link>
                </div>
            </div>
        
    )
}

export  default NotFoundPage