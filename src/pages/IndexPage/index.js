import React from 'react';
import { Card } from 'antd-mobile';
import MyCard from '@components/Card';
import './index.scss';

function Example() {
  return (
    <div className="hello">
      <Card >
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
      </Card>

      <MyCard >
        11111
      </MyCard>
    </div>
  );
}

export default Example;