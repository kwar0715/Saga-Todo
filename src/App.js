import React from 'react';
import { Container } from 'react-bootstrap';
import Dashboard from './components/dashboard';

const style = {
  paddingTop: '10px'
}

function App() {
  return (
    <Container fluid style={style}>
      <Dashboard/>
    </Container>
  );
}

export default App;
