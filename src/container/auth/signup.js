import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const FIELDS = {
	email: {
		type: 'text',
		label: 'Email'
	},
	password: {
		type: 'password',
		label: 'Password'
	},
	passwordConfirm: {
		type: 'password',
		label: 'Confirm Password'
	}
};

class Signup extends Component {
	handleFormSubmit(formProps) {
		//call action creator to sign up user
		this.props.signupUser(formProps);
	}

	showError(fieldName) {
		return (
			<div className="text-help">
				{fieldName.touched ? fieldName.error : ''}
			</div>
		);
	}

	showFormIsValid(fieldName) {
		return `form-group ${fieldName.touched && fieldName.invalid ? 'has-danger' : ''}`;
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops! </strong>
					{this.props.errorMessage}
				</div>
			);
		}
	}

	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field];

		return (
			<div key={field} className={this.showFormIsValid(fieldHelper)} >
					<label htmlFor={fieldConfig.label}>{fieldConfig.label}</label>
					<input type={fieldConfig.type} className="form-control" {...fieldHelper} />
					{this.showError(fieldHelper)}
			</div>
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="container signin">
				<div className="row">
					<p>Customer Sign up</p>
					<div className="col-md-4">

			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
			<fieldset className="form-group">
				{_.map(FIELDS, this.renderField.bind(this))}
				{this.renderAlert()}
				</fieldset>
				<button type="submit" className="btn btn-primary">Sign Up!</button>
			</form>
			</div>
		</div>

	</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Enter a ${field}`;
		}
	});

	if (values.password !== values.passwordConfirm) {
		errors.password = 'Passwords must match';
	}

	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: _.keys(FIELDS),
	validate
}, mapStateToProps, actions)(Signup);
