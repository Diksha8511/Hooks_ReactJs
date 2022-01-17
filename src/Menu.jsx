import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <>
        <div className="menu_style">
            <NavLink exact to="/" activeClassName="active_class">About US</NavLink>
            <NavLink exact to="/service" activeClassName="active_class">Service</NavLink>
            <NavLink exact to="/search" activeClassName="active_class">Search</NavLink>
            <NavLink exact to="/contact" activeClassName="active_class">Contact US</NavLink>
            <NavLink exact to="/user" activeClassName="active_class">User</NavLink>
        </div>
        </>
    )
}

export default Menu