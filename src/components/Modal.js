import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = props => {
  const { onClose, visible, title, children } = props

  if (!visible) return null

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseIcon
            icon={faTimes}
            onClick={onClose ? () => onClose() : null}
          />
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #55555544;
`

const ModalContent = styled.div`
  opacity: 1;
  background: #fff;
  box-shadow: rgba(184, 194, 215, 0.35) 0px 6px 9px 0px;
  width: 400px;
  padding: 1em;
  border-radius: 8px;
`

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1em;
`

const ModalTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  flex: 1;
`

const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export default Modal
