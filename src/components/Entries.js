import React from 'react'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'

const Entries = () => {
  return (
    <ContentWrapper>
      <Header title="Entries" icon={faFileAlt} />
      <Content>
        <p>Some entries lie here</p>
      </Content>
    </ContentWrapper>
  )
}

export default Entries
