import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import ScrollView from './ScrollView';
import MenuCategory from './MenuCategory';

const { Sider } = Layout;

function extractSelectedFromPath(path) {
  if (path.indexOf('entry') === -1) return { entry: '', category: '' };

  const pathArray = path.split('/');

  const entry = parseInt(pathArray[[pathArray.length - 1]], 10);
  const category = parseInt(pathArray[[pathArray.length - 2]], 10);

  return { entry, category };
}

function Sidebar(props) {
  const { menuItems, location } = props;
  const selectedIds = extractSelectedFromPath(location.pathname);

  console.log('Selected Ids:', selectedIds);

  const selectedEntry = selectedIds.entry !== 0 ? [`e${selectedIds.entry}`] : [];
  const selectedCategory = selectedIds.category !== 0 ? [`c${selectedIds.category}`] : [];

  const items = menuItems.map(cat => {
    const isSubMenuSelected = selectedIds.category === cat.id;
    console.log(selectedIds.category, cat.id, selectedIds.category === cat.id);
    return <MenuCategory key={`c${cat.id}`} category={cat} isSubMenuSelected={isSubMenuSelected} />;
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
          defaultSelectedKeys={selectedEntry}
          defaultOpenKeys={selectedCategory}
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
