import React from 'react';
import { Icon } from '@components/Icon';
import Message from '@components/Message';

import './index.scss';

function Example() {
  return (
    <div className="hello">
      <Icon type="success" />
      {Message.pop({
          type: 'success',
          content: '操作成功!',
          theme:'dark',
          duration:null
      })}
    </div>
  );
}

export default Example;