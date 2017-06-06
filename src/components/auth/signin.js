import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  render() {
    const { handleSubmit } = this.props;
    const renderField = field => (
      <fieldset className="form-group">
        <label>{field.label}</label>
        <input { ...field.input } type={ field.type } className="form-control" />
      </fieldset>
    );

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <Field name="email" type="email" component={ renderField } label="Email" />
        <Field name="password" type="password" component={ renderField } label="Password" />
        { this.renderAlert() }
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Error: </strong> { this.props.errorMessage }
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({
  form: 'signin'
})(Signin);

export default connect(mapStateToProps, actions)(Signin);
