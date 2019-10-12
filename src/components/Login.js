import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const LoginRaw = ({ className }) => (
  <section className={className}>
    <LoginForm />
  </section>
)

const Login = styled(LoginRaw)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export default Login
