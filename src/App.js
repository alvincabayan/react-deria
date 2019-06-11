import React from 'react';
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
