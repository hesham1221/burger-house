import React from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import classes from "./OrderCard.module.css";
import burger1 from "../header/assets/img/Burger1.png";
const OrderCard = () => {
  return (
    <Container style={{ margin: "3rem 0" }}>
      <Row className='justify-content-center' style={{padding:'0 3rem'}}>
        <Col lg={4} md={6} sm={12}>
          <Card border="light" style={{border:'none'}} className={classes.card}>
              <div className={classes.imgContainer}>
            <CardImg  variant="top" className={classes.cardimg} src={burger1}/>
            </div>
            <Card.Body>
              <Card.Title>
                <h1 className={classes.cardTitle}> Lorem ipsum dolor</h1>
              </Card.Title>
              <Card.Text>
                <p className={classes.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </Card.Text>
              <Button className={classes.cardbutton} size='lg' variant="danger">
                order Now
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
          <Card style={{border:'none'}} border="light" className={classes.card}>
          <div className={classes.imgContainer}>
            <CardImg  variant="top" className={classes.cardimg} src={burger1}/>
            </div>
            <Card.Body>
              <Card.Title>
                <h1 className={classes.cardTitle}> Lorem ipsum dolor</h1>
              </Card.Title>
              <Card.Text>
                <p className={classes.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </Card.Text>
              <Button className={classes.cardbutton} size='lg' variant="danger">
                order Now
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col lg={4} md={7} sm={12}>
          <Card style={{border:'none'}} border="light" className={classes.card}>
          <div className={classes.imgContainer}>
            <CardImg  variant="top" className={classes.cardimg} src={burger1}/>
            </div>
            <Card.Body>
              <Card.Title>
                <h1 className={classes.cardTitle}> Lorem ipsum dolor</h1>
              </Card.Title>
              <Card.Text>
                <p className={classes.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </Card.Text>
              <Button className={classes.cardbutton} size='lg' variant="danger">
                order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderCard;
