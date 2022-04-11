import React from 'react'
import {Container} from '@material-ui/core'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
      <Container maxWidth='lg'>
       <Navbar/>
       <Home/>
      </Container>
  );
}

export default App;
