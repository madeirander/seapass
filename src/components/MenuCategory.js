import React from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import MenuEntry from './MenuEntry';

const { SubMenu } = Menu;

export default function MenuCategory(props) {
  const { category, isSubMenuOpen, handleSubMenuClicked, ...otherProps } = props;
  const folderIcon = isSubMenuOpen ? 'folder-open' : 'folder';
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
      onTitleClick={() => handleSubMenuClicked(`c${category.id}`)}
    >
      {subItems}
    </SubMenu>
  );
}

MenuCategory.propTypes = {
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
  isSubMenuOpen: PropTypes.bool.isRequired,
  handleSubMenuClicked: PropTypes.func.isRequired,
};
