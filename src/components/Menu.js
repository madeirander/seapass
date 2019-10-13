import React from 'react'
import styled from 'styled-components'
import { faTags, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { useRouteMatch } from 'react-router-dom'
import MenuItem from './MenuItem'

const MenuRaw = ({ className }) => {
  const { url } = useRouteMatch()

  const items = [
    {
      label: 'Teams',
      path: `${url}/teams`,
      icon: faUsers,
    },
    {
      label: 'Categories',
      path: `${url}/categories`,
      icon: faTags,
    },
    {
      label: 'Entries',
      path: `${url}/entries`,
      icon: faFileAlt,
    },
  ].map(item => {
    return (
      <MenuItem
        to={item.path}
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
