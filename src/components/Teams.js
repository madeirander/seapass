import React from 'react'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'

const Teams = () => {
  return (
    <ContentWrapper>
      <Header title="Teams" icon={faUsers} />
      <Content>
        <p>Some teams will be here</p>
      </Content>
    </ContentWrapper>
  )
}

export default Teams
