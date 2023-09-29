import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu"
             aria-labelledby="sidebarMenuLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                        aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link d-flex align-items-center gap-2 active"
                           aria-current="page" to={'/users'}>
                            Users
                        </NavLink>
                    </li>
                </ul>

                {/*<hr className="my-3"/>*/}

                {/*<ul className="nav flex-column mb-auto">*/}
                {/*    <li className="nav-item">*/}
                {/*        <a className="nav-link d-flex align-items-center gap-2" href="#">*/}
                {/*            <svg className="bi">*/}
                {/*                <use xlinkHref="#gear-wide-connected"/>*/}
                {/*            </svg>*/}
                {/*            Settings*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <a className="nav-link d-flex align-items-center gap-2" href="#">*/}
                {/*            <svg className="bi">*/}
                {/*                <use xlinkHref="#door-closed"/>*/}
                {/*            </svg>*/}
                {/*            Sign out*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default Menu;