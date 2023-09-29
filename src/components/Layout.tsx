import React, {useEffect, useState} from 'react';
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {User} from "../models/user";

const MyComponent = (props: any) => {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user');

                    setUser(data);
                } catch (e) {
                    setRedirect(true);
                }
            }
        )();
    }, []);

    if (redirect) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <Nav user={user}/>

            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <Menu/>
                    </div>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="table-responsive small">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
