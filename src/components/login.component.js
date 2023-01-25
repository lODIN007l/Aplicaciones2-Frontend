import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./css/login.css"

import { connect } from "react-redux";
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
       Esta fila es requerida
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/menu");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/menu" />;
    }

    return (

<div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
  <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
    <div className="flex flex-col gap-1 w-full">
      <h1 className="text-4xl font-medium">Iniciar sesión</h1>
      <p className="text-gray-400">
        Ingresa al sistema con tus credenciales
      </p>
    </div>

    <Form className="flex flex-col gap-4"
       onSubmit={this.handleLogin}
             ref={(c) => {
               this.form = c;
             }}
    >
      <div>
        <label htmlFor="username" className="text-gray-200">
          Usuario *
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          placeholder="Ingresa tu usuario con el que te registraste"
          name="username"
          value={this.state.username}
          onChange={this.onChangeUsername}
          validations={[required]}
        />
      </div>
      <div>
        <label htmlFor="password" className="text-gray-200">
          Contraseña *
        </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          placeholder="Ingresa tu contraseña"
          name="password"
          value={this.state.password}
          onChange={this.onChangePassword}
          validations={[required]}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
        <span className="text-gray-400">
          ¿No tienes cuenta?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:text-indigo-500 transition-colors"
          >
            Registrate
          </a>
        </span>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <div className="mt-4 order-1 md:order-2">
        <button
          type="submit"
          className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
          disabled={this.state.loading}
        >
          {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Iniciar Sesion</span>
        </button>
      </div>
      {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
      <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
    </Form>
  </div>
  <div className="bg hidden lg:block">
  </div>
</div>

      
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);
