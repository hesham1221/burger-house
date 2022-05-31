import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import classes from './ReserveTabel.module.css'
const ReserverTabel = () => {
    return (
        <Container className={classes.contain} style={{textAlign:'center'}}>
            <h4 className={classes.h4}>Reservation</h4>
            <h1 className={classes.h1}>Book your table</h1>
            <Form className={classes.container}>
            <Row>
                <Col lg={6}>
                    <Form.Control placeholder='NAME' type='text' className={classes.con}/>
                    <Form.Control placeholder='DATE' type='date' className={classes.con}/>
                    <Form.Control placeholder='PEOPLE' type='number' className={classes.con}/>
                </Col>
                <Col lg={6}>
                <Form.Control placeholder='EMAIL' type='email' className={classes.con}/>
                <Form.Control placeholder='TIME' type='time' className={classes.con}/>
                <Button className={classes.btn} variant='danger' size='lg'>find table</Button>
                </Col>
            </Row>
            </Form>
        </Container>
    )
}

export default ReserverTabel
