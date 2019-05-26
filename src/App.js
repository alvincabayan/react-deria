import React from 'react';
import {Container} from 'react-bootstrap';
import OrderForm2 from './components/OrderForm2'
import NavigationBar from './components/NavigationBar';
import JumbotronHome from './components/JumbotronHome';

function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <JumbotronHome/>
      <Container>
        <OrderForm2></OrderForm2>
      </Container>
    </React.Fragment>
  );
}

export default App;
