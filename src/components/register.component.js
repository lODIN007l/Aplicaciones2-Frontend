import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.username, this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (

      // <div className="col-md-12">
      //   <div className="card bg-light text-dark">

      //     <h1><center>User Registration </center></h1>


      //     <Form
      //       onSubmit={this.handleRegister}
      //       ref={(c) => {
      //         this.form = c;
      //       }}
      //     >
      //       {!this.state.successful && (
      //         <div>
      //           <div className="form-group">
      //             <label htmlFor="username">Username</label>
      //             <Input
      //               type="text"
      //               className="form-control"
      //               name="username"
      //               value={this.state.username}
      //               onChange={this.onChangeUsername}
      //               validations={[required, vusername]}
      //             />
      //           </div>

      //           <div className="form-group">
      //             <label htmlFor="email">Email</label>
      //             <Input
      //               type="text"
      //               className="form-control"
      //               name="email"
      //               value={this.state.email}
      //               onChange={this.onChangeEmail}
      //               validations={[required, email]}
      //             />
      //           </div>

      //           <div className="form-group">
      //             <label htmlFor="password">Password</label>
      //             <Input
      //               type="password"
      //               className="form-control"
      //               name="password"
      //               value={this.state.password}
      //               onChange={this.onChangePassword}
      //               validations={[required, vpassword]}
      //             />
      //           </div>

      //           <div className="form-group">
      //             <button className="btn btn-dark btn-block">Sign Up</button>
      //           </div>
      //         </div>
      //       )}

      //       {message && (
      //         <div className="form-group">
      //           <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
      //             {message}
      //           </div>
      //         </div>
      //       )}
      //       <CheckButton
      //         style={{ display: "none" }}
      //         ref={(c) => {
      //           this.checkBtn = c;
      //         }}
      //       />
      //     </Form>
      //   </div>
      // </div>
      
<div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
  <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
    <div className="flex flex-col gap-1 w-full">
      <h1 className="text-4xl font-medium">Registrarse</h1>
      <p className="text-gray-400">
        Registro al sistema academico
      </p>
    </div>

    <Form className="flex flex-col gap-4"
       onSubmit={this.handleRegister}
             ref={(c) => {
               this.form = c;
             }}
    >
      {!this.state.successful && (
        <>
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
          validations={[required, vusername]}
        />
      </div>
      <div>
        <label htmlFor="username" className="text-gray-200">
          Coreo Electronico *
        </label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          placeholder="Ingresa tu correo electronico"
          name="email"
          value={this.state.email}
          onChange={this.onChangeEmail}
          validations={[required, email]}
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
          validations={[required, vpassword]}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
        <span className="text-gray-400">
          ¿Ya tienes Cuenta?{" "}
          <a
            href="/login"
            className="text-indigo-400 hover:text-indigo-500 transition-colors"
          >
            Inicia Sesion
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
        
                <span>Registrarse</span>
        </button>
      </div>
        
        </>
      )}
     
     {message && (
              <div className="form-group">
                <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
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
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
