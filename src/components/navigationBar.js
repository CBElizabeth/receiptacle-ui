import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigationBar.css';

function NavigationBar() {
    const accountText = 'login';

    return (
        <section id="navBar">
            <h1 className="logo">receiptacle</h1>
            <NavLink exact className="button" to="/" activeClassName="active">home</NavLink>
            <NavLink className="button" to="/block" activeClassName="active">block</NavLink>
            <NavLink className="button" to="/receipts" activeClassName="active">receipts</NavLink>
            <NavLink className="button" to="/settings" activeClassName="active">settings</NavLink>
            <NavLink className="button" to="/login" activeClassName="active">{accountText}</NavLink>
        </section>
    );
}

// NavigationBar.propTypes = {
//     accountText: propTypes.string,
// };

//todo: disable settings if !loggedIn

export default NavigationBar;