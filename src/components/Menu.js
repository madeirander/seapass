import React from 'react'
import styled from 'styled-components'
import { faTags, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'

const MenuRaw = ({ className }) => {
  const items = [
    {
      label: 'Teams',
      icon: faUsers,
    },
    {
      label: 'Categories',
      icon: faTags,
    },
    {
      label: 'Entries',
      icon: faFileAlt,
    },
  ].map(item => {
    return <MenuItem key={item.label} icon={item.icon} label={item.label} />
  })

  return <nav className={className}>{items}</nav>
}

const Menu = styled(MenuRaw)`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
`

export default Menu
