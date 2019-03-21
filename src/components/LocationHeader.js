import React from 'react';
import { Breadcrumb } from 'antd';

export default function LocationHeader() {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Category</Breadcrumb.Item>
      <Breadcrumb.Item>Entry</Breadcrumb.Item>
    </Breadcrumb>
  );
}
