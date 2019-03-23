import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScrollView from './ScrollView';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function Sidebar(props) {
  const { menuItems } = props;
  const items = menuItems.map(item => {
    const subItems = item.entries.map(sub => {
      return (
        <Menu.Item key={sub.id}>
          <Link to={`/entry/${sub.id}`}>{sub.name}</Link>
        </Menu.Item>
      );
    });
    return (
      <SubMenu
        key={item.id}
        title={
          <span>
            <Icon type="user" />
            {item.name}
          </span>
        }
      >
        {subItems}
      </SubMenu>
    );
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
