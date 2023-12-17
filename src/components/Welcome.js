import React, { Component } from 'react';
import        { Link }      from 'react-router-dom';

export class Welcome extends Component {
    render() {
        return (
            <>
                <div className="landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Personal Expense Manager</h1>
                                <p className="lead">Create your account to manage your daily expense.</p>
                                <hr />
                                <Link className="btn btn-lg btn-primary mr-2" to="/signup">Sign Up</Link>
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Welcome;