import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigationBar.css';

function NavigationBar() {
    const accountText = 'login';
    const activeStyle = {
        color: '#69FFF1',
        fontSize: '1.4em',
    };
    return (
        <section id="navBar">
            <h1>receiptacle</h1>
            <NavLink exact className="button" to="/" activeStyle={activeStyle}>home</NavLink>
            <NavLink className="button" to="/block" activeStyle={activeStyle}>block</NavLink>
            <NavLink className="button" to="/receipts" activeStyle={activeStyle}>receipts</NavLink>
            <NavLink className="button" to="/settings" activeStyle={activeStyle}>settings</NavLink>
            <NavLink className="button" to="/login" activeStyle={activeStyle}>{accountText}</NavLink>
        </section>
    );
}

// NavigationBar.propTypes = {
//     accountText: propTypes.string,
// };

//todo: disable settings if !loggedIn
//todo: check path to determine which button has class current
//todo: collapse options for tablet/phone

export default NavigationBar;