import React from 'react';
import { Card } from 'antd-mobile';
import MyCard from '@components/Card';
import {Button} from 'antd-mobile';
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
            <MyCard.Header 
                thumbClassName=""
                thumb="https://cdn.weipaitang.com/static/2020033124a1fbda-a6f6-fbdaa6f6-4c05-ef0e824493ff-W200H200"
                extra={<Button type="primary">关注</Button>}
            />
            <MyCard.Body >
                我是body
            </MyCard.Body>
            <MyCard.Footer content="我是footer" />
      </MyCard>
    </div>
  );
}

export default Example;