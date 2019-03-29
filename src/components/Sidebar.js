import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import ScrollView from './ScrollView';
import MenuCategory from './MenuCategory';

const { Sider } = Layout;

function getCategoryIdFromPath(path) {
  return path.indexOf('entry') !== -1
    ? parseInt(path.split('/')[[path.split('/').length - 2]], 10)
    : 0;
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    const pathCategoryId = getCategoryIdFromPath(props.location.pathname);

    this.state = {
      activeSubMenuKeys: pathCategoryId !== 0 ? [`c${pathCategoryId}`] : [],
    };

    this.handleSubMenuClicked = this.handleSubMenuClicked.bind(this);
    this.onAddEntryClicked = this.onAddEntryClicked.bind(this);
  }

  onAddEntryClicked() {
    this.setState({ activeSubMenuKeys: [] });
  }

  handleSubMenuClicked(subMenuKey) {
    this.setState(prevState => {
      const { activeSubMenuKeys } = prevState;
      const indexOf = activeSubMenuKeys.indexOf(subMenuKey);

      if (indexOf === -1) {
        activeSubMenuKeys.push(subMenuKey);
      } else {
        activeSubMenuKeys.splice(indexOf, 1);
      }

      return { activeSubMenuKeys };
    });
  }

  render() {
    const { activeSubMenuKeys } = this.state;
    const { menuItems, location } = this.props;

    console.log('activeSubMenuKeys', activeSubMenuKeys);

    const items = menuItems.map(cat => {
      const isSubMenuOpen = activeSubMenuKeys.indexOf(`c${cat.id}`) !== -1;

      return (
        <MenuCategory
          key={`c${cat.id}`}
          category={cat}
          isSubMenuOpen={isSubMenuOpen}
          handleSubMenuClicked={this.handleSubMenuClicked}
        />
      );
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
              <Button onClick={this.onAddEntryClicked} type="dashed" icon="plus" size="small" block>
                Add New
              </Button>
            </Link>
          </div>
          <Menu
            selectedKeys={[location.pathname]}
            openKeys={activeSubMenuKeys}
            style={{ borderRight: 0 }}
            mode="inline"
          >
            {items}
          </Menu>
        </ScrollView>
      </Sider>
    );
  }
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
