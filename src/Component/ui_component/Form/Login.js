import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Joi from '@hapi/joi';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: {}
    };
  }
  schema = Joi.object({
    email: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

    repeat_password: Joi.ref('password'),

    access_token: [Joi.string(), Joi.number()],

    birth_year: Joi.number()
      .integer()
      .min(1900)
      .max(2013),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] }
    })
  })
    .with('username', 'birth_year')
    .xor('password', 'access_token')
    .with('password', 'repeat_password');

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    let result = this.schema.validate(
      { email: email, password: password },
      { abortEarly: false }
    );
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    this.setState({ error: errors });

    // if (email === "") {
    //   this.setState({ error: { email: "please Enter your email" } });
    //   return;
    // } else if (password === "") {
    //   this.setState({ error: { password: "please Enter password" } });
    //   return;
    // }
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginSection className="container ">
        <div className="hint-text text-right ">
          <Link to="Signup">New to Booking.com? Create a free account? </Link>
        </div>
        <div className="card my-5 mx-auto container card-layout">
          <div className="card-header card-header-layout">
            <h3>Welcome Back</h3>
            <p>Log in with email</p>
          </div>

          <div className="card-body">
            <form action="#" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
                <div style={{ color: 'red' }}>{this.state.error.email}</div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                />
                <div style={{ color: 'red' }}>{this.state.error.password}</div>
              </div>
              <button
                type="submit"
                className="btn btn-block btn-primary submit-btn"
              >
                LOGIN
              </button>
              <div className="form-group">
                <label className="checkbox-inline">
                  <div className="col">
                    <input type="checkbox" required="required" />
                    Remember me
                  </div>
                </label>
                <br />

                <h6>
                  <center> OR LOGIN WITH</center>
                </h6>
                <p>
                  <Link to="/" className="btn btn-block btn-facebook">
                    <i className="fab fa-facebook-f"></i> Sign Up via Facebook
                  </Link>
                  <Link to="/" className="btn btn-block btn-google">
                    <i className="fab fa-sm fa-google"></i> Sign Up via Google
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </LoginSection>
    );
  }
}
export default Login;
const LoginSection = styled.div`
  .card {
    box-shadow: 9px 9px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 5px;
    border: none !important;
  }
  .card-layout {
    width: 400px !important;
    border: #ced4da solid 1px !important;
  }
  .card-header-layout {
    background: #ffffff;
    color: #000;
  }

  .submit-btn {
    background: #3b28cc;
    color: #fff;
  }
  .submit-btn:hover {
    background: #1705a0;
  }

  .btn-facebook {
    background: #3b5998;
    color: #fff;
  }
  .btn-google {
    background: #4488fd;
    color: #fff;
    margin-top: 12px !important;
  }

  h6 center {
    font-family: 'Segoe UI';
    padding-bottom: 6px;
    color: #403b62;
    font-size: 13px;
  }
  .btn-facebook:hover {
    background: #203a72;
  }
  .btn-google:hover {
    background: #23509e;
  }

  .btn-facebook:hover,
  .btn-google:hover {
    color: #fff;
  }
  h3 {
    color: #3b28cc;
    text-align: center;
  }
  .card-header-layout p {
    color: #403b62;

    text-align: center;
  }

  .checkbox-inline {
    margin-top: 12px;
  }
`;
