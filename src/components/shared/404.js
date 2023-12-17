import React, { Component } from 'react';
import axios                from 'axios';
import        { Link }      from 'react-router-dom';

class NotFound extends Component {    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>404 Not Found.</h2>
                            <div className="error-details">
                                Sorry, an error has ocurred, Request page not found.
                            </div>
                            <div className="error-actions">
                                <Link to="/" className='btn btn-primary btn-lg'>Take Me Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;