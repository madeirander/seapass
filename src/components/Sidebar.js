import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollView from './ScrollView';
import MenuCategory from './MenuCategory';
import { getCategories, getEntryById } from '../database';
import { setActiveEntry } from '../actions';
import { getEntryIdFromPath } from '../util';

const { Sider } = Layout;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    const pathEntryId = getEntryIdFromPath(props.location.pathname);
    const item = getEntryById(pathEntryId);

    this.state = {
      activeSubMenuKeys: item !== undefined ? [`c${item.catId}`] : [],
    };

    this.handleSubMenuClicked = this.handleSubMenuClicked.bind(this);
    this.onAddEntryClicked = this.onAddEntryClicked.bind(this);
  }

  componentWillMount() {
    this.categories = getCategories();
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
    const { location, updateActiveEntry } = this.props;

    const items = this.categories.map(cat => {
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
            onClick={({ key }) => {
              updateActiveEntry(getEntryIdFromPath(key));
            }}
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
};

const mapStateToProps = store => ({
  activeEntryId: store.activeEntry.entryId,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateActiveEntry: setActiveEntry }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
