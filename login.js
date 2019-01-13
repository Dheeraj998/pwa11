import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './login.css';
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      RegistrationNumber: null,
      password: null,
      formErrors: {
        RegistrationNumber: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        RegistrationNumber: ${this.state.firstName}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "RegistrationNumber":
        formErrors.RegistrationNumber =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
    
      
      <div className="wrapper">
     
        <div className="form-wrapper">
          <h1>Student Zone</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="RegistrationNumber">
              <label htmlFor="RegistrationNumber">Registration Number</label>
              <input
                className={formErrors.RegistrationNumber.length > 0 ? "error" : null}
                placeholder="RegistrationNumber"
                type="text"
                name="RegistrationNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.RegistrationNumber.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" to="/about">Log In</button>
              <small>new user?</small>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}



export default contact
