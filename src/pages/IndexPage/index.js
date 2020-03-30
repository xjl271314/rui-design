import React from 'react';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
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

      <Button
        type="wave" 
      />

     <Button
        type="stroke" 
        shape="round"
      />
      <Icon 
          type="search"
          size={24}
      />
    </div>
  );
}

export default Example;