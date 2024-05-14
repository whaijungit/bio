import { afer } from '@/utils'
import { buttonStyle } from './styles'
import { LoginProps } from './interface'
import { Button, Form, FormProps, Input } from 'antd'


export const LoginPhone: React.FC<LoginProps> = (props) => {

    const [form] = Form.useForm()

    const handleSubmit: FormProps['onFinish'] = async () => {

    }

    const handleFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
        afer(errorInfo)
    }

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            onFinishFailed={handleFinishFailed}
        >
            <Form.Item name='username' rules={[{ required: true, message: '请输入手机号' }]}>
                <Input allowClear placeholder='请输入手机号' />
            </Form.Item>
            <Form.Item style={{ marginBottom: 42 }} name='password' rules={[{ required: true, message: '请输入验证码' }]}>
                <Input.Password allowClear placeholder='请输入验证码' />
            </Form.Item>
            <Form.Item>
                <Button loading={props.loading} style={buttonStyle} htmlType='submit' type='primary' block>登录</Button>
            </Form.Item>
            <Form.Item>
                <Button htmlType='reset' style={buttonStyle} block>注册</Button>
            </Form.Item>
        </Form>
    )
}