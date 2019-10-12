import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import UserInfo from './UserInfo'

const SidebarRaw = ({ className }) => {
  return (
    <div className={className}>
      <UserInfo />
      <Menu />
    </div>
  )
}

const Sidebar = styled(SidebarRaw)`
  display: inline-block;
  vertical-align: top;
  width: 25%;
  background: #fff;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export default Sidebar
