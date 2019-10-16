import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const MenuItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  color: rgba(72, 72, 72, 0.8);
  transition: color 0.5s ease;

  :hover {
    color: #88c0cf;
  }
`

const MenuItem = ({ label, icon, ...otherProps }) => {
  return (
    <MenuItemLink {...otherProps}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} fixedWidth />
      {label}
    </MenuItemLink>
  )
}

export default MenuItem
