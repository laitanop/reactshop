import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signinUser({ email, password });
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;

		return (
			<div>
			<div className="container signin">
				<div className="row">
					<p>Customer Sign in</p>
					<div className="col-md-4">
						<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
							<fieldset className="form-group">
								<label htmlFor="Email">Email:</label>
								<input {...email} className="form-control" />


								<label htmlFor="Password">Password:</label>
								<input {...password} type="password" className="form-control" />
							</fieldset>
							{this.renderAlert()}
							<button action="submit" className="btn btn-info">
							Sign in
							</button>&nbsp;&nbsp;
							<button type="submit" className="btn btn-primary">Sign in with facebook</button>
						</form>
					</div>
				</div>
				</div>
				<div className="container-fluid">

				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
