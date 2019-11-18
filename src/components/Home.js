import React from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'

const Home = () => {
  return (
    <>
      <ContentWrapper>
        <Header title="Dashboard" icon={faHome} />
        <Content>
          <p>This is my dashboard</p>
        </Content>
      </ContentWrapper>
    </>
  )
}

export default Home
