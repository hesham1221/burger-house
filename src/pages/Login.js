import React, { useRef, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../components/store/login-slice";
import AppBar from "../components/header/AppBar";
import classes from "./login.module.css";
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.login.islogin);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [confirm, setConfirm] = useState(false);
  const [islog, setIslog] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!islog) {
      const name = nameRef.current.value;
      const confirmPass = confirmRef.current.value;
      if (password !== confirmPass) {
        setConfirm(true);
        return;
      }
      fetch("https://www.api.pharo-tech.xyz/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name : name,
        password_confirmation : confirmPass

      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data)})
      .catch((e) => console.log(e));
    }
   else{
    fetch("https://www.api.pharo-tech.xyz/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        localStorage.setItem('token1' , data.data.token)
        localStorage.setItem('userName1' , data.data.user.name)
        localStorage.setItem('email1' , data.data.user.email)
        dispatch(
          loginAction.login({
            token: data.data.token,
            email: data.data.user.email,
            userName: data.data.user.name,
            profilePic :''
          })
        );
        history.push('/profile')
      })
      .catch((e) => console.log(e));}
      
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setIslog((log) => !log);
  };
  return (
    <>
      <AppBar />
      <div style={{ textAlign: "center" }}>
        <h1 className={classes.h1}>{islog ? "Login Form" : "Register Form"}</h1>
      </div>
      {confirm && (
        <Alert variant="danger" className={classes.alert}>
          password and confirm password aren't the same !!
        </Alert>
      )}
      <Container
        style={{ display: "grid", marginTop: "-2.5rem", paddingTop: "-2rem" }}
      >
        <Form onSubmit={submitHandler} className={classes.form}>
          {!islog && (
            <Form.Group controlId="formBasicName">
              <Form.Label className={classes.label}>Full Name</Form.Label>
              <Form.Control
                required
                ref={nameRef}
                className={classes.control}
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>Email address</Form.Label>
            <Form.Control
              required
              ref={emailRef}
              className={classes.control}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password</Form.Label>
            <Form.Control
              required
              ref={passwordRef}
              className={classes.control}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {!islog && (
            <Form.Group className="mb-3" controlId="formBasicConPassword">
              <Form.Label className={classes.label}>
                Confirm Password
              </Form.Label>
              <Form.Control
                required
                ref={confirmRef}
                className={classes.control}
                type="password"
                placeholder="Confirm password"
              />
            </Form.Group>
          )}
          <Button type="submit" className={classes.submit}>
            {islog ? "Login" : "Register"}
          </Button>
          <Button
            variant="outline"
            onClick={changeHandler}
            className={classes.toggle}
          >
            {islog ? "Registerer a new one !" : "Login Page "}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
