import React from 'react';
import { Button } from '@components/Button';
import './index.scss';

function Example() {
  return (
    <div className="hello">
      <Button
        type="bubble" 
        shape="round"
      > click me</Button>

      <Button
        type="cutdown" 
        shape="round"
      />
    </div>
  );
}

export default Example;