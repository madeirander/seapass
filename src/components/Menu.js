import React from 'react'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'
import MenuItem from './MenuItem'
import { getMenuItems } from '../menu'

const MenuRaw = ({ className }) => {
  const { url } = useRouteMatch()

  const items = getMenuItems().map(item => {
    const pathUrl = item.path ? `${url}/${item.path}` : `${url}`
    return (
      <MenuItem
        to={pathUrl}
        key={item.label}
        icon={item.icon}
        label={item.label}
      />
    )
  })

  return <nav className={className}>{items}</nav>
}

const Menu = styled(MenuRaw)`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
`

export default Menu
