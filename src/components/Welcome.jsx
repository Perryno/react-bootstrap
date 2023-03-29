import React from 'react';
import { Button } from 'react-bootstrap';

function Welcome() {
  return (
    <div>
      <h1>Perry's Shop</h1>
      <p>
        Lo shop online migliore di sempre.
      </p>
      <p>
        <Button className='btn-success'>Scopri di più {}</Button>
      </p>
    </div>
  );
}

export default Welcome;
