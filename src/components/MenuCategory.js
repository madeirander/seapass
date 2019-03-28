import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import MenuEntry from './MenuEntry';

const { SubMenu } = Menu;

export default class MenuCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick() {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  }

  render() {
    const { category, ...otherProps } = this.props;
    const { isOpen } = this.state;
    const folderIcon = isOpen ? 'folder-open' : 'folder';
    const subItems = category.entries.map(sub => {
      return <MenuEntry key={sub.id} entry={sub} />;
    });
    return (
      <SubMenu
        key={category.id}
        title={
          <span>
            <Icon type={folderIcon} />
            {category.name}
          </span>
        }
        {...otherProps}
        onTitleClick={this.handleTitleClick}
      >
        {subItems}
      </SubMenu>
    );
  }
}

MenuCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};