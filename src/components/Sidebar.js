import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import ScrollView from './ScrollView';
import MenuCategory from './MenuCategory';

const { Sider } = Layout;

function extractSelectedFromPath(path) {
  if (path.indexOf('entry') === -1) return { entry: 0, category: 0 };

  const pathArray = path.split('/');

  const entry = pathArray[[pathArray.length - 1]];
  const category = pathArray[[pathArray.length - 2]];

  return { entry, category };
}

function Sidebar(props) {
  const { menuItems, location } = props;
  const selected = extractSelectedFromPath(location.pathname);
  const items = menuItems.map(cat => {
    return <MenuCategory key={`c${cat.id}`} category={cat} />;
  });

  if (items.length === 0) {
    items.unshift(
      <Menu.Item disabled key="0">
        <Icon type="exclamation" /> No entries found
      </Menu.Item>
    );
  }

  return (
    <Sider className="sidebar" width={250} style={{ background: '#fff' }}>
      <ScrollView style={{ height: '100%', borderRight: 0 }}>
        <div style={{ padding: 5, margin: 5 }}>
          <Link to="/new">
            <Button type="dashed" icon="plus" size="small" block>
              Add New
            </Button>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={[`e${selected.entry}`]}
          defaultOpenKeys={[`c${selected.category}`]}
          style={{ borderRight: 0 }}
          mode="inline"
        >
          {items}
        </Menu>
      </ScrollView>
    </Sider>
  );
}

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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

export default withRouter(Sidebar);
