import React,     { Component }    from 'react';
import            { createWallet } from '../../../actions/projectActions';
import            { connect }      from 'react-redux';
import classnames                  from 'classnames';
class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            accountManager:'',
            description:'',
            priority:'',
            currentBalance:'',
            errors:'',
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors:nextProps.errors });
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        });
    };

    submitHandler = (event) => {
        const newWallet = {
            name:this.state.name,
            accountManager:this.state.accountManager,
            description:this.state.description,
            priority:this.state.priority,
            currentBalance:'',
        };
        this.props.createWallet(newWallet, this.props.history);
        event.preventDefault();
    };

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", {"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "accountManager")} className={classnames("form-control form-control-lg", {"is-invalid":this.state.errors.accountManager})} placeholder="Account No" />
                                    <p className="text-danger">{this.state.errors.accountManager}</p>
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg", {"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.changeHandler(event, "priority")} className={classnames("form-control form-control-lg", {"is-invalid":this.state.errors.priority})} name="priority">
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                    <p className="text-danger">{this.state.errors.priority}</p>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors:state.errors
});

export default connect(mapStateToProps, { createWallet })(CreateWallet);