import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./main.module.css";
import img1 from "../header/assets/img/Best-Burger.jpg";
import img2 from "../header/assets/img/image3.jfif";
import img3 from "../header/assets/img/images.jfif";
import Order from "./Order";
import Discover from "./Discover";
import ReserverTabel from "./ReserverTabel";

const main = () => {
  return (
    <Container>
      <Row className={classes.row}>
        <Col>
          <div className={classes.column1}>
            <h5 className={classes.h5__1}>Try it now</h5>
            <h3 className={classes.h3__1}>natural ingerediants</h3>
            <img alt='img1' className={classes.img1} src={img1} />
          </div>
        </Col>
        <Col>
          <div className={classes.column2}>
            <h5 className={classes.h5__2}>Try it now</h5>
            <h3 className={classes.h3__2}>more fun</h3>
            <img alt='img2' src={img2} className={classes.img} />
            <span style={{position :'relative'}}>
            <h5 className={classes.h5__3}>Try it now</h5>
            <h3 className={classes.h3__3}>fresh&chill</h3>
            <img alt='img3' src={img3} className={classes.img} />
            </span>
          </div>
        </Col>
      </Row>
      <Order />
      <Discover />
      <ReserverTabel />
    </Container>
  );
};

export default main;
