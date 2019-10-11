import React from 'react'
import { Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function MenuEntry(props) {
  const { entry, ...otherProps } = props
  return (
    <Menu.Item {...otherProps}>
      <NavLink to={`/entry/${entry.id}`}>
        <Icon type="file-text" /> {entry.name}
      </NavLink>
    </Menu.Item>
  )
}

MenuEntry.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    catId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}
