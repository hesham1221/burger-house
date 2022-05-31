import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Order.module.css";
import OrderCard from "./OrderCard";
const Order = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <div className={classes.title}>always tasty burger</div>
      <h1 className={classes.header}>Choose & enjoy</h1>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores a
        voluptatem dignissimos incidunt doloremque quod corporis id fuga, veniam
        tempora? Enim minima porro repellat dolore saepe possimus laboriosam
        aperiam cum Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laborum laudantium totam ut, illum sapiente necessitatibus placeat!
        Dolores praesentium doloribus, eius excepturi, nesciunt corrupti,
        nostrum totam dolorem optio iure illum harum!
      </p>
      <OrderCard />
    </Container>
  );
};

export default Order;
