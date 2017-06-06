import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit } = this.props;
    const renderField = field => (
      <fieldset className="form-group">
        <label>{field.label}</label>
        <input { ...field.input } type={ field.type } className="form-control" />
        { field.meta.touched && field.meta.error ? <div className="error">{field.meta.error}</div> : null }
      </fieldset>
    );

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <Field name="email" type="email" component={ renderField } label="Email" />
        <Field name="password" type="password" component={ renderField } label="Password" />
        <Field name="passwordConfirm" type="password" component={ renderField } label="Confirm Password" />
        { this.renderAlert() }
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter an password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);

export default connect(mapStateToProps, actions)(Signup);
