import React from "react";
import { Container, Navbar, NavbarBrand, NavLink, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../store/login-slice";
import { useHistory } from "react-router";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "./assets/img/burgerhouse.png";
import bike from "./assets/img/VectorObject.png";
import classes from "./AppBar.module.css";
import { Link } from "react-router-dom";
const AppBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.islogin);
  return (
    <>
      <Navbar>
        <Container>
          <NavbarBrand className={classes.logoContainer}>
            <img alt="logo" src={logo} className={classes.logo} />
          </NavbarBrand>
          <Container className={classes.contact}>
            <Nav>
              <img alt="logo" className={classes.bike} src={bike} />
              <h6 className={classes.h5}>Express Delivery +2012222222 </h6>
            </Nav>
          </Container>
        </Container>
      </Navbar>
      <Navbar bg="inherit" expand="sm" className="mb-5">
        <Container>
          <div className={classes.toggleContainer}>
            <NavbarToggle className={classes.toggle} />
          </div>
          <NavbarCollapse className={classes.collapse}>
            <Nav>
              <Link className={classes.navlink} to="/">
                Home
              </Link>

              {!isLogin && (
                <Link className={classes.navlink} to="/login">
                  Login
                </Link>
              )}

              {isLogin && (
                <Link className={classes.navlink} to="/profile">
                  profile
                </Link>
              )}

              <Link className={classes.navlink} href="#contactus">
                contact&nbsp;us
              </Link>
              {isLogin && (
                <Link
                  onClick={() => {
                    dispatch(loginAction.logout());
                    localStorage.removeItem("token1");
                    localStorage.removeItem("email1");
                    localStorage.removeItem("userName1");
                    history.push("/");
                    window.location.reload(true);
                  }}
                  className={classes.navlink}
                >
                  Logout
                </Link>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppBar;
