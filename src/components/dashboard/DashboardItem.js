import React, { Component }    from 'react';
import        { Link }         from 'react-router-dom';
import        { deleteWallet } from '../../actions/projectActions';
import        { connect }      from 'react-redux';


class DashboardItem extends Component {

    delete() {
        this.props.deleteWallet(this.props.wallet.reference);
    }

    render() {

        const wallet = this.props.wallet;

        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{wallet.name}</h3>
                            <p>Account Number: {wallet.accountManager}</p>
                            <p>{wallet.description}</p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h3>Balance</h3>
                            <h1>{wallet.currentBalance} USD</h1>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                                <Link to={`/transactions/${wallet.reference}`}>
                                    <li className="list-group-item board text-success">
                                        <i className="fa fa-flag-checkered pr-1"> View Transactions </i>
                                    </li>
                                </Link>
                                <Link to={`/update-wallet/${wallet.reference}`}>
                                    <li className="list-group-item update text-info">
                                        <i className="fa fa-edit pr-1"> Update Account Info</i>
                                    </li>
                                </Link>
                                <Link to="/dashboard" onClick={() => this.delete()}>
                                    <li className="list-group-item delete text-danger">
                                        <i className="fa fa-minus-circle pr-1"> Delete Account</i>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteWallet })(DashboardItem);