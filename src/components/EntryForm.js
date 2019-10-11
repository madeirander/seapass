import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { updateEntry } from '../database'

class EntryForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const { form, entry } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        updateEntry({ ...entry, data: values })
      }
    })
  }

  render() {
    const { form, entry } = this.props
    const { getFieldDecorator } = form

    console.log('entry: ', entry)

    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: '400px' }}>
        <Form.Item style={{ marginBottom: 0 }}>
          {getFieldDecorator('host', {
            initialValue: entry.data.host,
            rules: [{ required: true, message: 'Please input the hostname!' }],
          })(
            <Input
              prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Hostname"
            />
          )}
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          {getFieldDecorator('user', {
            initialValue: entry.data.user,
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          {getFieldDecorator('pass', {
            initialValue: entry.data.pass,
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="save-form-button">
            Save
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'normal_login' })(EntryForm)
