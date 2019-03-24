import React from 'react';
import { Layout, Menu, Button } from 'antd';
import PropTypes from 'prop-types';
import ScrollView from './ScrollView';
import MenuCategory from './MenuCategory';

const { Sider } = Layout;

export default function Sidebar(props) {
  const { menuItems } = props;
  const items = menuItems.map(cat => {
    return <MenuCategory category={cat} />;
  });

  return (
    <Sider className="sidebar" width={250} style={{ background: '#fff' }}>
      <ScrollView style={{ height: '100%', borderRight: 0 }}>
        <div style={{ padding: 5, margin: 5 }}>
          <Button type="dashed" icon="plus" size="small" block>
            Add New
          </Button>
        </div>
        <Menu
          style={{ borderRight: 0 }}
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
        >
          {items}
        </Menu>
      </ScrollView>
    </Sider>
  );
}

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};
