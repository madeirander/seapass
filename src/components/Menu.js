import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const MenuRaw = ({ className }) => {
  const items = ['Teams', 'Categories', 'Entries'].map(item => {
    return <MenuItem key={item} label={item} />
  })

  return <nav className={className}>{items}</nav>
}

const Menu = styled(MenuRaw)`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
`

export default Menu
