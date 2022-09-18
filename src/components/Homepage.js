import React from 'react';
import Container from 'react-bootstrap/Container';

const Homepage = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mx-auto text-light">
        <h1 className='display-5' >This is the Homepage</h1>
        <h1 className='display-6'>It only exists to be another site other the Shop.</h1>
    </Container>
  )
}

export default Homepage;
