import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import ProductDetail from './ProductDetail';
import styled from 'styled-components';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            menuOrderName: '', 
            customerName: '',
            customerCompany: '',
            menuOrderSize: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const self = this; 
      
        console.log(JSON.stringify(self.state));
        axios.post('http://localhost:8080/deria/v1/menuorder', 
            JSON.stringify(self.state),
            {
                headers: {'Content-Type':'application/json'}
            }
        )
        .then(function (response) {
        if (response.status === 200) {
            alert("Order successfully submitted");
            self.setState({
                menuOrderName: self.state.menuOrderName,
                customerName: '',
                customerCompany: '',
                menuOrderSize: ''
            });
        }
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    componentDidMount() {
        const self = this; 
        axios.get('http://localhost:8080/deria/v1/currentMenu')
            .then(function (response) {
                self.setState({
                    menuOrderName: response.data.currentMenuName,
                    customerName: self.state.currentMenuName,
                    customerCompany: self.state.currentMenuCompany,
                    menuOrderSize: self.state.menuOrderSize
                });
            })
        
        ;
    }
    
    render() {
        const Styles = styled.div`
            .productDetailContainer {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 700px;
                background: #D3D3D3;
                padding: 20px;
            }
        `;
        
        return (
           <Styles>
                <Container className="productDetailContainer">
                    <ProductDetail 
                    menuOrderName={this.state.menuOrderName}
                    customerName={this.state.customerName}
                    customerCompany={this.state.customerCompany}
                    menuOrderSize={this.state.menuOrderSize}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    />
                </Container>
           </Styles>
        )
    }
}

export default Home
