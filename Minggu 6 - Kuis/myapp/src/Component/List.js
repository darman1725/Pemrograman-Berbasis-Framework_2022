import React from 'react';
import logo from '../Images/logo.PNG';
import {NavLink} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import '../Css/ListStyle.css';
const List=()=>{
    return(
        <>
        <header>
            <div className="container container-flex">
                <div className="logoContainer">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <nav>
                    <div className="list">
                        <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                        <NavLink to="/services" className="listItem" activeClassName="activeItem">Services</NavLink>
                        <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                        <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
                    </div>
                </nav>
                <div className="icons">
                    <SearchIcon className="icon"/>
                    <PersonIcon className="icon"/>
                    <CallIcon className="icon"/>
                </div>
            </div>
        </header>
        </>
    )
}
export default List;