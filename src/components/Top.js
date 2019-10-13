import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import { logout } from '../services/auth'

const PageTitle = styled.h3`
  padding: 0;
  margin: 0;
  display: inline-block;
  line-height: 52px;
  vertical-align: middle;
  font-size: 1.5em;
  font-weight: 400;
`

const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
`

const RightActions = styled.div`
  float: right;
`

const RightMenuItem = styled.a`
  text-decoration: none;
  line-height: 52px;
  display: block;
  color: #fff;
  transition: background 0.5s ease;
  cursor: pointer;
  padding-left: 1em;
  padding-right: 1em;

  :hover {
    background: #2e343f33;
  }
`

const TopRaw = ({ className }) => {
  const history = useHistory()

  return (
    <header className={className}>
      <HeaderContainer>
        <PageTitle>Seapass</PageTitle>
        <RightActions>
          <RightMenuItem
            onClick={() => {
              logout()
              history.push('/login')
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: 10 }} />
            Logout
          </RightMenuItem>
        </RightActions>
      </HeaderContainer>
    </header>
  )
}

const Top = styled(TopRaw)`
  background: #5e80aa;
  color: #fff;
  height: 52px;
  margin-bottom: 1.5rem;
`

export default Top
