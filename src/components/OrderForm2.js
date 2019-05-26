import React, { Component } from 'react'
import {Form, Button, Image, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import laing from '../assets/laing.jpg';

class OrderForm2 extends Component {
    handleSubmit = (event) => {
        // alert(`${this.state.username}  ${this.state.comments} ${this.state.topic}`);
        console.log(event.OrderForm2);
        event.preventDefault();
    }
    
    render() {
        const Styles = styled.div`
        .orderForm2 {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 30%;
            border-style: solid;
            border-width: 1px;
            padding: 5px;
        }
        `;

        return (
            <Styles>
                <Form className="orderForm2" onSubmit={this.handleSubmit}>
                    <Image src={laing} fluid></Image>
                    <h2>Special Order: Laing</h2>
                    
                    <Form.Group as={Row} controlId="formGroupName">
                        <Form.Label column sm={3}>
                            Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Name"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGroupCompany">
                        <Form.Label column sm={3}>
                            Company
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Company"/>
                        </Col>
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={3}>
                                Order Size
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Check 
                                    inline 
                                    type='radio'
                                    id='smallOrder'
                                    name='orderSize'
                                    label='Small Order with Rice'
                                />
                                <Form.Check
                                    inline 
                                    type='radio'
                                    id='largeOrder'
                                    name='orderSize'
                                    label='Large Order'
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row}>
                        <Col sm={3}/>
                        <Col sm={9}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Styles>
        );
    }
}

export default OrderForm2;
