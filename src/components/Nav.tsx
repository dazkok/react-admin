import React from 'react';
import {User} from "../models/user";
import {Link} from "react-router-dom";
import axios from "axios";

const Nav = (props: {user: User | null}) => {
    const logout = async () => {
        await axios.post('logout');
    }

    return (
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

            <ul className="navbar-nav me-3">
                <Link to={'/profile'} className="nav-link">
                    {props.user?.first_name} {props.user?.last_name}
                </Link>
                <Link to={'/login'} className="nav-link"
                      onClick={logout}
                >Sign out
                </Link>
            </ul>
        </header>
    );
};

export default Nav;