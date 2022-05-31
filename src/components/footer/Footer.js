import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import logo from "../header/assets/img/logo.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container>
      <Row className={classes.row}>
        <Col lg={6} className={classes.col1} >
          <img src={logo} alt='logo' className={classes.logo} />
          <p className={classes.par}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quia
            ad, adipisci quasi laborum asperiores ipsum quod harum tempora culpa
            debitis incidunt amet eos aut dolorem deleniti ipsam mollitia
            corporis.
          </p>
          <h4 className={classes.copy}>&copy; burger house 2021 all right reserved</h4>
        </Col>
        <Col className={classes.col2} lg={6} >
          <div className={classes.icons}>
            <h1  className={classes.icons1}><ImLocation />  Main Road , Damietta</h1>
            <h1 className={classes.icons2}><FiMail /> pharomade.xyz </h1>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
