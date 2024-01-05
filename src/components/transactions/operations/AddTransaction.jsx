import React,     { useEffect, useState } from "react";
import            { Link }                from "react-router-dom";
import            { connect }             from 'react-redux';
import classnames                         from 'classnames';
import            { useParams }           from 'react-router-dom';

function AddTransaction({ props }) {

    const { reference } = useParams();

    const [state, setState] = useState({
              reference: '',
                 amount:'',
                   name: '',
            description:'',
                   type: '',
                 errors: '',
    });

    useEffect(() => {

    }, [reference]);

    const changeHandler = (event, fieldName, checkbox) => {
        setState({
            ...state,
            [fieldName]: checkbox ? event.target.checked : event.target.value,
        });
    };

    const submitHandler = (event) => {        
        event.preventDefault();
    };

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to={`/transactions/${reference}`} className="btn btn-ligjt">Back to Wallet</Link>
                        <h4 className="display-4 text-center">Record New Transaction</h4>
                        <p className="lead text-center">Account</p>

                        <form onSubmit={(event) => submitHandler(event)}>
                            <div className="form-group">
                                <input type="number" min="1" value={state.amount} onChange={(event) => changeHandler(event, 'amount', false)} className="form-control form-control-lg" />
                            </div>
                            <div className="form-group">
                                <textarea value={state.description} onChange={(event) => changeHandler(event, 'description', false)} className="form-control form-control-lg"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="transaction-type">Transaction Type:</label>
                                <div className="form-check form-check-inline">
                                    <input checked className="form-check-input" type="radio" name="type" onChange={(event) => changeHandler(event, 'type', true)} id="income" value="1" selected="true" />
                                    <label className="form-check-label" for="income">Income</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="type" onChange={(event) => changeHandler(event, 'type', true)} id="expense" value="2" />
                                    <label className="form-check-label" for="expense">Expense</label>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTransaction;