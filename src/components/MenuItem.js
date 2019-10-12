import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuItemRaw = ({ className, label, icon }) => {
  return (
    <a href="#?" className={className}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} fixedWidth />
      {label}
    </a>
  )
}

const MenuItem = styled(MenuItemRaw)`
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  color: rgba(72, 72, 72, 0.8);
  transition: color 0.5s ease;

  :hover {
    color: #88c0cf;
  }
`

export default MenuItem
