import React, { Component } from 'react';

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
                                <a href="" className="btn btn-lg btn-primary mr-2">Sign Up</a>
                                <a href="" className="btn btn-lg btn-secondary mr-2">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Welcome;