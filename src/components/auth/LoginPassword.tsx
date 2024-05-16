import { useEffect } from 'react'
import { Checkbox, Flex, Form, Input } from 'antd'

export const LoignPassword: React.FC = () => {
    const [form] = Form.useForm()
    useEffect(() => {
        form.resetFields()
    }, [form])


    return (
        <>
            <Form.Item name='username' rules={[{ required: true, message: '请输入邮箱/手机号' }]}>
                <Input allowClear placeholder='请输入邮箱/手机号' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password allowClear placeholder='请输入密码' />
            </Form.Item>
            <Form.Item name='captcha' rules={[{ required: true, message: '请输入验证码' }]}>
                <Flex gap={10}>
                    <Input style={{ flexGrow: '1' }} allowClear placeholder='请输入验证码' />
                    <div
                        style={{
                            width: 120,
                            height: 40,
                            borderRadius: 4,
                            outline: 'none',
                            display: 'inline-flex',
                            border: '1px solid var(--border-color)',
                        }}
                    >
                    </div>
                </Flex>
            </Form.Item>
            <Form.Item initialValue={true} valuePropName='checked' name='remdmer'>
                <Checkbox >记住密码</Checkbox>
            </Form.Item>
            {/* <Form.Item>
                <Button loading={loading} style={buttonStyle} htmlType='submit' type='primary' block>登录</Button>
            </Form.Item>
            <Form.Item>
                <Button htmlType='reset' style={buttonStyle} block>注册</Button>
            </Form.Item> */}
        </>
    )
}

