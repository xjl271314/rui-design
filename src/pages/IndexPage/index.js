import React from 'react';
import { Icon } from '@components/Icon';
import Notification from '@components/Notification';

import './index.scss';

function Example() {
  return (
    <div className="hello">
      <Icon type="success" />
      {Notification.pop({
            type: 'success',
            message: '趣谈前端学习打卡',
            description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
            duration: null
        })}
    </div>
  );
}

export default Example;