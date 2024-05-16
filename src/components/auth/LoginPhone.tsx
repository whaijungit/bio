import { Form, Input } from 'antd'
import { CaptchaInput } from './captchaInput'
import { captcha } from '../icons'


export const LoginPhone: React.FC = () => {

    return (
        <>
            <Form.Item name='phone' rules={[{ required: true, message: '请输入手机号' }]}>
                <Input allowClear placeholder='请输入手机号' />
            </Form.Item>
            <Form.Item style={{ marginBottom: 42 }} name='captcha' rules={[{ required: true, message: '请输入验证码' }]}>
                <CaptchaInput inputProps={{ prefix: captcha, placeholder: '请输入验证码', allowClear: true }} buttonProps={{ children: '获取验证码' }} />
            </Form.Item>
            {/* <Form.Item>
                <Button loading={props.loading} style={buttonStyle} htmlType='submit' type='primary' block>登录</Button>
            </Form.Item>
            <Form.Item>
                <Button htmlType='reset' style={buttonStyle} block>注册</Button>
            </Form.Item> */}
        </>
    )
}