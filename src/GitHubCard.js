import './App.css';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <h1><Badge header bg="info">Hello World</Badge>{''}</h1>
      <h2><Badge pill bg="secondary">
        It is {new Date().toLocaleTimeString()}
      </Badge>{' '}</h2>
    </div>
  );
}
function AlertDismissible() {
  const [show, setShow] = useState(true);
  
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          This is the current time!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

render(AlertDismissible);

export default App;