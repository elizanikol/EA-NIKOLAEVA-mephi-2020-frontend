import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../buttons/Button";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/"><Button primary>Login</Button></NavLink>
            <NavLink to="/signUp"><Button primary>Sign up</Button></NavLink>
        </div>
    );
}

export default Navigation;
