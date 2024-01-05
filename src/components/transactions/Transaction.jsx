import React, { useState }  from "react";
import        { Link }      from "react-router-dom";
import        { useParams } from 'react-router-dom';

function Transaction({ props }) {
    
    const { reference } = useParams();

    return (
        <div className="container">
            <Link to="/" className="btn btn-default btn-lg mb-3">Back</Link>
            <Link to={`/transactions/add/${reference}`} className="btn btn-info btn-lg mb-3">
                <i className="fas fa-plus-circle"> Record new Transaction</i>
            </Link>
            <br />

            <div className="card text-center">
                {/*<CARD: HEADER>*/}
                <div className="card-header bg-success text-white">
                    <h4>Account Balance</h4>
                    <h1>27000 USD</h1>
                </div>
                {/*<.CARD: HEADER>*/}
                <hr />
                {/*<TABLE>*/}
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>2020-04-15</td>
                            <td>Income</td>
                            <td className="text-success">-3000</td>
                            <td>
                                <Link to={``} className="text-info">
                                    <i className=""></i>
                                    <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                                </Link>
                            </td>
                        </tr>

                        <tr className="table-danger">
                            <td>2020-04-01</td>
                            <td>Income</td>
                            <td className="text-success">+30000</td>
                            <td>
                                <Link to={``} className="text-info">
                                    <i className=""></i>
                                    <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/*<.TABLE>*/}
            </div>

        </div>
    );
}

export default Transaction;