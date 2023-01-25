import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import Menu from "./components/menu.component"
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-fixed-top navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Escuela jose Maria Roman
            </Link>
            <div className="navbar-nav mr-auto">
              
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/menu"} className="nav-link">
                    Dashboard
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    Cerrar Sesion
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Iniciar Sesion
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Registrarse
                  </Link>
                </li>
              </div>
            )}
          </nav>
  

          <div >
            <Switch>
              <Route exact path={["/", "/register"]} component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
              <Route exact path="/menu" component={Menu} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);