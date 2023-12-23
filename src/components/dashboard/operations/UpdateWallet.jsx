import React,     { useEffect, useState }     from 'react';
import            { getWallet, updateWallet } from '../../../actions/projectActions';
import            { connect }                 from 'react-redux';
import classnames                             from 'classnames';
import            { useParams }               from 'react-router-dom';

function UpdateWallet({ props }) {

    const { reference } = useParams();
    
    const [state, setState] = useState({
        reference: '',
        name: '',
        accountManager: '',
        description: '',
        priority: '',
        currentBalance: '',
        errors: '',
    });

    useEffect(() => {
        getWallet(reference);
    }, [reference]);

    const changeHandler = (event, fieldName) => {
        setState({
            ...state,
            [fieldName]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        getWallet(reference);
        
        const editWallet = {
            reference: state.reference,
            name: state.name,
            accountManager: state.accountManager,
            description: state.description,
            priority: state.priority,
            currentBalance: '',
        };
        console.log(props);
        updateWallet(state.reference, editWallet, props);
        event.preventDefault();
    };

    return (
        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Wallet</h5>
                        <hr />
                        <form onSubmit={(event) => submitHandler(event)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={state.name}
                                    onChange={(event) => changeHandler(event, 'name')}
                                    className={classnames('form-control form-control-lg', { 'is-invalid': state.errors.name })}
                                    placeholder="Account Name"
                                />
                                <p className="text-danger">{state.errors.name}</p>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={state.accountManager}
                                    onChange={(event) => changeHandler(event, 'accountManager')}
                                    className={classnames('form-control form-control-lg', { 'is-invalid': state.errors.accountManager })}
                                    placeholder="Account No"
                                />
                                <p className="text-danger">{state.errors.accountManager}</p>
                            </div>
                            <div className="form-group">
                                <textarea
                                    onChange={(event) => changeHandler(event, 'description')}
                                    className={classnames('form-control form-control-lg', { 'is-invalid': state.errors.description })}
                                    placeholder="Description"
                                >
                                    
                                </textarea>
                                <p className="text-danger">{state.errors.description}</p>
                            </div>
                            <div className="form-group">
                                <select
                                    value={state.priority}
                                    onChange={(event) => changeHandler(event, 'priority')}
                                    className={classnames('form-control form-control-lg', { 'is-invalid': state.errors.priority })}
                                    name="priority"
                                >
                                    <option value={3}>Display Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                                <p className="text-danger">{state.errors.priority}</p>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    wallet: state.wallet.wallet,
});

export default connect(mapStateToProps, { getWallet, updateWallet })(UpdateWallet);