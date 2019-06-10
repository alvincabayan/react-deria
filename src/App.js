import React from 'react';
import {Container} from 'react-bootstrap';
import OrderForm2 from './components/OrderForm2'
import NavigationBar from './components/NavigationBar';
import JumbotronHome from './components/JumbotronHome';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <JumbotronHome/>
      <Home/>
    </React.Fragment>
  );
}

export default App;
