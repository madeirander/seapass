import React, { useState } from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'
import Modal from './Modal'
import { Button } from './form'

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <ContentWrapper>
        <Header title="Dashboard" icon={faHome} />
        <Content>
          <p>This is my dashboard</p>
          <Button onClick={() => setModalVisible(true)}>Show modal</Button>
        </Content>
      </ContentWrapper>
      <Modal
        title="My modal here"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <p>lorem ipsum dolor meten not</p>
      </Modal>
    </>
  )
}

export default Home
