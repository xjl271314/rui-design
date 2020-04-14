import React from 'react';
// import { Button } from '@components/Button';
// import { Icon } from '@components/Icon';
import { TextTransition } from '@components/TextTransition';
import './index.scss';

function Example() {
  return (
    <div className="hello">
      <TextTransition 
          type="down"
          text="土地是以它的肥沃和收获而被估价的。"
      />
    </div>
  );
}

export default Example;