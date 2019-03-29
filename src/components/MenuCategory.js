import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import MenuEntry from './MenuEntry';

const { SubMenu } = Menu;

export default class MenuCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isSubMenuOpen !== undefined ? props.isSubMenuOpen : false,
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick() {
    const { category, handleSubMenuClicked } = this.props;

    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });

    handleSubMenuClicked(`c${category.id}`);
  }

  render() {
    const { category, isSubMenuOpen, handleSubMenuClicked, ...otherProps } = this.props;
    const { isOpen } = this.state;
    const folderIcon = isOpen && isSubMenuOpen ? 'folder-open' : 'folder';
    const subItems = category.entries.map(entry => {
      return <MenuEntry key={`/entry/${entry.catId}/${entry.id}`} entry={entry} />;
    });
    return (
      <SubMenu
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
  handleSubMenuClicked: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        catId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
