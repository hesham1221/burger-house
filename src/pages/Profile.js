import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import AppBar from "../components/header/AppBar";
import { useSelector, useDispatch } from "react-redux";
import classes from "./profile.module.css";
import axios from "axios";
const Profile = () => {
  const imgRef = useRef();
  const token = useSelector((state) => state.login.token);
  const [im, setem] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  let formDa = new FormData();
  const fileHandler = (event) => {
    event.preventDefault();
    setSelectedFile(imgRef.current.files[0]);
    formDa.append("image", selectedFile);
    fetch("https://api.pharo-tech.xyz/store-image",{
      method:'POST',
      body : {
        image : formDa,
        token,
      },headers : {
        'Content-type' : 'multipart/form-data',
        'Accept' : 'application/json'
      }
    }).then(res=>res.json()).then(data=> console.log(data)).catch(e => console.log(e))
  }
  const authHandler =(event) =>{
    event.preventDefault();
    setSelectedFile(imgRef.current.files[0]);
    formDa.append("image", selectedFile);
    fetch("https://api.pharo-tech.xyz/store-image",{
      method:'POST',
      body : formDa,
      headers : {
        'Authorization': 'Bearer ' + token,
        'Accept' : 'application/json',
        'Content-Type' : 'multipart/form-data'
      }
    }).then(res=>res.json()).then(data=> console.log(data)).catch(e => console.log(e))
  }
  const userData = useSelector((state) => state.login);
  return (
    <div>
      <AppBar />
      <Container style={{ textAlign: "center" }}>
        <form className={classes.form}>
          <div className={classes.imgContainer}>
            <label htmlFor="file-input">
              <img
                className={classes.img}
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="profileIMg"
              />
            </label>
            {im && (
              <div>
              <button className={classes.up} onClick={fileHandler}>
                Upload
              </button>
              <button className={classes.up} style={{backgroundColor : 'inherit' , color : '#3d2514'}} onClick={authHandler}>
                Upload with authorization
              </button>
              </div>
            )}
            <input
              onClick={(event) => {
                setem(true);
              }}
              style={{ display: "none" }}
              ref={imgRef}
              type="file"
              id="file-input"
            />
          </div>
          <div className={classes.info}>
            <h1 className={classes.h1}>UserName : </h1>{" "}
            <h4 className={classes.h4}>{userData.userName}</h4>
          </div>
          <div className={classes.info}>
            <h1 className={classes.h1}>Email : </h1>{" "}
            <h4 className={classes.h4}>{userData.email}</h4>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Profile;
