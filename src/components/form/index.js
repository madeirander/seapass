import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const H3 = styled.h3`
  padding: 0;
  margin: 0;
  padding-bottom: 1em;
`

const Input = styled.input`
  flex-grow: 1;
  background: #f8f9fb;
  color: #4c5569;
  font-size: 1em;
  border: 0;
  font-family: 'Ubuntu', sans-serif;
  padding-left: 0.5em;

  :focus {
    outline: none;
  }
`

export const Button = styled.button`
  background-color: #88c0d0;
  color: #3b4252;
  text-align: center;
  text-decoration: none;
  font-size: 1.125em;
  outline: none;
  border-radius: 0.25em;
  border-width: 0;
  padding: 0.375em 0.75em;
  margin: 0.25em;
  cursor: pointer;
  transition: background-color 250ms ease-in-out 0s;

  :hover {
    background-color: #99c9d7;
  }
`

export const FormControl = styled(props => {
  const { icon, className, type, name, placeholder, onChange } = props

  const iconElem = props.icon ? (
    <FontAwesomeIcon icon={icon} fixedWidth />
  ) : null

  return (
    <div className={className}>
      {iconElem}
      <Input
        placeholder={placeholder}
        name={name}
        type={type}
        spellCheck={false}
        onChange={onChange}
      />
    </div>
  )
})`
  display: flex;
  border-radius: 4px;
  background: #f8f9fb;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.5em;
  padding-left: ${props => (props.icon ? '0.75em' : '0.5em')};
  margin-bottom: 1em;
`
