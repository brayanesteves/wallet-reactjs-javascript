import React, { Component } from 'react';

export class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container">
                        <a href="" className="navbar-brand">Expense Manager</a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mobile-nav"><span className="navbar-toggler-icon"></span></button>

                        <div id="mobile-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href="" className="nav-link">Dashboard</a>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="" className="navlink">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="navlink">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </>
        );
    }
}

export default Nav;