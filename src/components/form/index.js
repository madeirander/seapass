import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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

export const Button = styled(props => {
  const { className, children } = props
  return <button className={className}>{children}</button>
})`
  background-color: #88c0d0;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: ${({ size }) =>
    (size === 'xs' && '0.75em') ||
    (size === 'sm' && '1.125em') ||
    (size === 'lg' && '2em') ||
    '1.125em'};
  outline: none;
  border-radius: 0.25em;
  border-width: 0;
  padding: ${({ size }) =>
    (size === 'xs' && '0.250em 0.5em') ||
    (size === 'sm' && '0.375em 0.75em') ||
    (size === 'lg' && '0.375em 0.75em') ||
    '0.375em 0.75em'};
  margin: 0.25em;
  cursor: pointer;
  transition: background-color 250ms ease-in-out 0s;

  :hover {
    background-color: #99c9d7;
  }
`

export const ActionButton = styled(props => {
  const { className, loading, children, submit, size } = props
  const type = submit ? 'submit' : null
  const loadingSpinner = loading ? (
    <FontAwesomeIcon
      style={{ marginRight: '0.5em' }}
      icon={faSpinner}
      size="sm"
      fixedWidth
      spin
    />
  ) : null

  return (
    <Button className={className} size={size} type={type} disabled={loading}>
      {loadingSpinner}
      {children}
    </Button>
  )
})`
  background-color: ${props => (props.loading ? '#9b9b9b' : '#88c0d0')};
  cursor: ${props => (props.loading ? 'progress' : 'pointer')};

  :hover {
    background-color: ${props => (props.loading ? '#9b9b9b' : '#99c9d7')};
  }
`

export const FormControl = styled(props => {
  const { icon, disabled, className, type, name, placeholder, onChange } = props

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
        disabled={disabled}
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
