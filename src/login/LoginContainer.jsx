import React, { Component } from "react";
import LoginForm from "./LoginForm.jsx";
import axios from 'axios';
require('dotenv').config()

const FormValidators = require("../libraries/validate");
const validateLoginForm = FormValidators.validateLoginForm;

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: "",
        email: "",
        password: "",
      },
      btnTxt: "show",
      type: "password",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

  }

  submitLogin(user) {
    const params = { email: user.email, password: user.pw };

    axios
      .post(process.env.REACT_APP_API_URL + "login", params)
      .then(res => {
        if (res.status === 200) {
          // when login success, currently redirect to empty page but we can add actions later

          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
       
          window.location.href = '/home';

          console.log("success");
        } else {
          this.setState({
            errors: { message: res.data.msg }
          });
        }
      })
      .catch(err => {
        if(err.response.status === 401 || err.response.status === 404 || err.response.status === 403 || err.response.status === 400)
        {
          this.setState({
            errors: { message: err.response.data.msg }
          });
        }
        console.log("login data submit error: ", err);
        
      });
  }

  validateForm(event) {
    event.preventDefault();
    console.log(this.state.user);
    const payload = validateLoginForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {}
      });
      const user = {
        usr: this.state.user.username,
        pw: this.state.user.password,
        email: this.state.user.email
      };
      this.submitLogin(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }


  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
        />
      </div>
    );
  }
}

export default LoginContainer;