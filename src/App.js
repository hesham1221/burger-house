import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import { Redirect, useHistory } from "react-router";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginAction } from "./components/store/login-slice";
import Profile from "./pages/Profile";
import { useEffect } from "react";

function App() {
  const isLogin = useSelector(state => state.login.islogin)
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!localStorage.getItem("token1")) {
      dispatch(
        loginAction.login({
          token: localStorage.getItem('token1'),
          email: localStorage.getItem('email1'),
          userName: localStorage.getItem('userName1'),
          profilePic: "",
        })
      );
    }
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
         {!isLogin ? <Login /> : <Redirect to={{pathname : '/profile'}} />} 
        </Route>
        <Route path="/profile">
         {isLogin ? <Profile /> : <Redirect to={{pathname : '/login'}} /> } 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
