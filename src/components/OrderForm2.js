import React, { Component } from 'react'
import {Form, Button, Image, Row, Col} from 'react-bootstrap'
import ReactDOM from "react-dom";
import styled from 'styled-components';
import laing from '../assets/laing.jpg';

class OrderForm2 extends Component {
    state = { 
        name: '',
        customerName: '',
        customerCompany: '',
        menuOrderSize: ''
    }
    
    handleSubmit = (event) => {
        const name=this.refs.name.value;
        const company= this.refs.company.value;
        const orderSize= ReactDOM.findDOMNode(this).querySelector('input[type="radio"][name="orderSize"]:checked').value;
        console.log(name);
        console.log(company);
        console.log(orderSize);
        
        console.log(JSON.stringify(name));
        event.preventDefault();
    }

    
    render() {
        const Styles = styled.div`
        .orderForm2 {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 480px;

            border-style: solid;
            border-width: 1px;
            padding: 5px;
        }
        `;
        
        return (
            <Styles>
                <Form className="orderForm2" onSubmit={this.handleSubmit} ref="orderform2">
                    <Image src={laing} fluid></Image>
                    <h2>Special Order: Laing</h2>
                    
                    <Form.Group as={Row} controlId="formGroupName">
                        <Form.Label column sm={3}>
                            Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Name" ref="name"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGroupCompany">
                        <Form.Label column sm={3}>
                            Company
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control as='input' type="text" placeholder="Company" ref="company"/>
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
                                    name='orderSize'
                                    type='radio'
                                    id='smallOrder'
                                    label='Small Order with Rice'
                                    value='small'
                                />
                                <Form.Check
                                    inline 
                                    name='orderSize'
                                    type='radio'
                                    id='largeOrder'
                                    label='Large Order'
                                    value='large'
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
