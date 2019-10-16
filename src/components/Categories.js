import React from 'react'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'

const Categories = () => {
  return (
    <ContentWrapper>
      <Header title="Categories" icon={faTags} />
      <Content>
        <p>Some categories also</p>
      </Content>
    </ContentWrapper>
  )
}

export default Categories
