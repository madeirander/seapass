import React from 'react'
import Menu from './Menu'
import UserInfo from './UserInfo'
import Content from './Content'

const Sidebar = () => {
  return (
    <Content style={{ display: 'inline-block', width: '23%' }}>
      <UserInfo />
      <Menu />
    </Content>
  )
}

export default Sidebar
