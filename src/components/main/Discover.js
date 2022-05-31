import React from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import classes from "./Discover.module.css";
import burder from "../header/assets/img/FoodImage.jpg";
const Discover = () => {
  return (
    <Container style={{ padding: "1rem 1rem", margin: "5rem 0" }}>
      <Row className={classes.row}>
        <Col  lg={5} sm={12}>
          <h4 className={classes.h3}>Discover</h4>
          <h1 className={classes.h1}>upcoming events</h1>
          <p className={classes.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, esse
            vel labore, autem corrupti adipisci placeat illo nisi eligendi
            incidunt fugit quo eos. Corrupti at corporis pariatur voluptas
            reprehenderit obcaecati.
          </p>
        </Col>
        <Col  lg={7} sm={12} >
          <img alt='burger' src={burder} className={classes.burger} />
        </Col>
      </Row>
    </Container>
  );
};

export default Discover;
