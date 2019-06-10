import React from 'react'
import { Form, Button, Image, Row, Col } from 'react-bootstrap';
import laing from '../assets/laing.jpg';



const ProductDetail = props => {
    const {menuOrderName, customerName, customerCompany, menuOrderSize, handleChange, handleSubmit} = props;
    return (
        <div>
            <Row>
                <Col><Image src={laing} fluid></Image></Col>
                <Col>
                    <h3>Special Order : {menuOrderName}</h3>
                    <br/>
                    <Form className="orderForm">
                        <Form.Group as={Row} controlId="formGroupCustomerName">
                            <Form.Label column sm={4}>
                                Name
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control value={customerName} onChange={handleChange} name="customerName" type="text" placeholder="Type your name." />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGroupCustomerCompany">
                            <Form.Label column sm={4}>
                                Company
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control value={customerCompany} onChange={handleChange} name="customerCompany" type="text" placeholder="Type your Company." />
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={4}>
                                    Order Size
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Check 
                                        inline 
                                        name='menuOrderSize'
                                        type='radio'
                                        label='Small Order with Rice'
                                        value='small'
                                        checked={menuOrderSize === 'small'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline 
                                        name='menuOrderSize'
                                        type='radio'
                                        label='Large Order'
                                        value='large'
                                        checked={menuOrderSize === 'large'}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <Form.Group as={Row}>
                            <Col sm={3}/>
                            <Col sm={9}>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Col>
                        </Form.Group>

                        
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

        
    

export default ProductDetail
