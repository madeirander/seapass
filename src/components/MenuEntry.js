import React from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MenuEntry(props) {
  const { entry, ...otherProps } = props;
  return (
    <Menu.Item key={entry.id} {...otherProps}>
      <Link to={`/entry/${entry.id}`}>
        <Icon type="file-text" /> {entry.name}
      </Link>
    </Menu.Item>
  );
}

MenuEntry.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
