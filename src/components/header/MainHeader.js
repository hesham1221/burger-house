import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainpic from "./assets/img/3606214.png";
import classes from "./mainHeader.module.css";
const MainHeader = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={4}>
          <h6 className={classes.h5}>it is a good time for the great taste of burgers</h6>
          <h1 className={classes.burger}>Burger</h1>
          <h2 className={classes.week}>week</h2>
        </Col>
        <Col lg={6} md={8}>
            <Container fluid >
          <img alt='main pic' src={mainpic} className={classes.mainImg} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHeader;
