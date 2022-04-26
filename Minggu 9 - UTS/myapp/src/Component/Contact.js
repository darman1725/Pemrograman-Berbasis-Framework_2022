import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/ContactStyle.css';

const Contact=()=>{
    return(
        <>
        <h1>Hubungi Kami</h1>
        <form className="contact">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name"/>
            </div>
        </form>
            <div>
                <label htmlFor="name">Email</label>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password"/>
            </div>
            <div>
                <label htmlFor="mobile">Mobile</label>
                <input type="mobile" placeholder="Enter your mobile"/>
            </div>
            <div className="btnBox">
                <div className="btn">
                <NavLink to="/" className="readMore">Submit Details</NavLink>
                </div>
            </div>
        </>
    )
}
export default Contact;