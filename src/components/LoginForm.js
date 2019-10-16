import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FormControl, H3, Button } from './form'
import { performLogin } from '../actions/auth-actions'

const ErrorMessage = styled.p`
  color: #bf616a;
`

const LoginFormRaw = props => {
  const { className, authenticated, error, loading } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (authenticated) {
    return <Redirect to="/" />
  }

  const errorMessage = error ? (
    <ErrorMessage>Check your credentials and try again</ErrorMessage>
  ) : null

  const onFormSubmit = event => {
    event.preventDefault()
    props.performLogin(username, password)
  }

  return (
    <div className={className}>
      <form onSubmit={onFormSubmit}>
        <H3>Login</H3>
        <FormControl
          icon={faUser}
          placeholder="Username"
          name="username"
          type="text"
          value={username}
          disabled={loading}
          onChange={event => setUsername(event.target.value)}
        />
        <FormControl
          icon={faLock}
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          disabled={loading}
          onChange={event => setPassword(event.target.value)}
        />
        {errorMessage}
        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
    </div>
  )
}

const LoginForm = styled(LoginFormRaw)`
  vertical-align: middle;
  background: #fff;
  box-shadow: rgba(184, 194, 215, 0.35) 0px 6px 9px 0px;
  width: 400px;
  padding: 2em;
  border-radius: 8px;
`

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

export default connect(
  mapStateToProps,
  {
    performLogin,
  }
)(LoginForm)
