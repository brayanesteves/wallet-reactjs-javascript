import React, { Component } from 'react';
import        { Link }      from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Expense Manager</Link>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mobile-nav"><span className="navbar-toggler-icon"></span></button>

                        <div id="mobile-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="navlink" to="/signup">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navlink" to="/login">Login</Link>
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