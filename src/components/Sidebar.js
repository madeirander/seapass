import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import UserInfo from './UserInfo'
import Content from './Content'
import { fetchCurrentUser } from '../actions/current-user-actions'

const Sidebar = props => {
  const { fetchUser } = props

  useEffect(() => {
    fetchUser()
  })

  return (
    <Content style={{ display: 'inline-block', width: '23%' }}>
      <UserInfo />
      <Menu />
    </Content>
  )
}

export default connect(
  null,
  {
    fetchUser: fetchCurrentUser,
  }
)(Sidebar)
