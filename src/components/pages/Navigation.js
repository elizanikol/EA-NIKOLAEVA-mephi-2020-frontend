import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../buttons/Button";
import "../buttons/Button.css";

const Navigation = () => {
    return (
        <div class="nav-buttons">
            <NavLink to="/login"><Button type = {'primary'} title = {'Login'}/></NavLink>
            <NavLink to="/signUp"><Button type = {'primary'} title = {'SignUp'}/></NavLink>
        </div>
    );
}

export default Navigation;
