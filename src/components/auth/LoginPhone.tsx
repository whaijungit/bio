import { buttonStyle } from './styles'
import { Button, Form, Input } from 'antd'

export const LoginPhone: React.FC = () => {

    const [form] = Form.useForm()

    return (
        <Form form={form}>
            <Form.Item name='username' rules={[{ required: true, message: '请输入手机号' }]}>
                <Input allowClear placeholder='请输入手机号' />
            </Form.Item>
            <Form.Item style={{ marginBottom: 42 }} name='password' rules={[{ required: true, message: '请输入验证码' }]}>
                <Input.Password allowClear placeholder='请输入验证码' />
            </Form.Item>
            <Form.Item>
                <Button style={buttonStyle} htmlType='submit' type='primary' block>登录</Button>
            </Form.Item>
            <Form.Item>
                <Button htmlType='reset' style={buttonStyle} block>注册</Button>
            </Form.Item>
        </Form>
    )
}