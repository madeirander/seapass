import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Content from './Content'

const H1 = styled.h1`
  margin: 0;
  padding: 0;
`

const Header = ({ title, icon }) => {
  return (
    <Content>
      <H1>
        <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />
        {title}
      </H1>
    </Content>
  )
}

export default Header
