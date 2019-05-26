import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import CookingPan from '../assets/CookingPan.mp4';

const Styles = styled.div`
.jumbotron {
    position: relative;
    overflow: hidden;
    padding: 0px 0px 0px 0px;
    width:100%;
    height:300px;
  }
  .jumbotron video {
    position: absolute;
    z-index: 1;
    top: 0;
    width:100%;
    height:100%;
    /*  object-fit is not supported on IE  */
    object-fit: cover;
    opacity:0.7;
  }
  .jumbotron .container {
    z-index: 2;
    position: relative;
  }
  
  
`;

const JumbotronHome = () => (
    <Styles>
        <Jumbotron>
            <video loop autoPlay>
                <source src={CookingPan} type="video/mp4"></source>
            </video>

            <Container>
                <h1 className="display-1">[`de-Ria]</h1>
                <p className="lead">Welcome to Auckland's best food prepared by Filipino Mom.</p>
            </Container>
            
        </Jumbotron>
    </Styles>
);

export default JumbotronHome
