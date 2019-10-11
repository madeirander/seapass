import React from 'react'
import styled from 'styled-components'

const PageTitle = styled.h3`
  padding: 0;
  margin: 0;
  display: inline-block;
  text-transform: uppercase;
  line-height: 52px;
  vertical-align: middle;
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
  vertical-align: middle;
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
  return (
    <header className={className}>
      <HeaderContainer>
        <PageTitle>app_title</PageTitle>
        <RightActions>
          <RightMenuItem>logout</RightMenuItem>
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
