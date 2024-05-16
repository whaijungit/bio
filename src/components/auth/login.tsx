
import { afer, awit } from '@/utils'
import { useState } from 'react'
import { buttonStyle } from './styles'
import { LoginPhone } from './LoginPhone'
import { Form, Modal, Tabs, message, Button } from 'antd'
import { LoignPassword } from './LoginPassword'

interface LoginProps {
    open?: boolean
    onClose?: () => void
}


export const Login: React.FC<LoginProps> = ({ open, onClose }) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [tabKey, setTabKey] = useState<string>('pwd')
    const handleLoginPwd = async (values: any) => {
        setLoading(true)
        await awit()
        message.success('登录成功', 1)
        console.log(values)
        onClose && onClose()
        setLoading(false)
    }

    const handleLoginPhone = async (vs: any) => {
        setLoading(true)
        await awit()
        message.success('登录成功', 1)
        console.log(vs)
        onClose && onClose()
        setLoading(false)
    }

    const handleFinish = async (values: any) => {
        if (tabKey === 'pwd') {
            handleLoginPwd(values)

        } else {
            handleLoginPhone(values)
        }
    }

    return (
        <Modal
            open={open}
            title={null}
            footer={null}
            destroyOnClose
            onCancel={onClose}
            maskClosable={false}
            styles={{
                content: {
                    paddingTop: 40,
                    paddingLeft: 80,
                    paddingRight: 80,
                    borderRadius: 16,
                }
            }}
        >
            <Form
                form={form}
                onFinishFailed={afer}
                onFinish={handleFinish}
            >
                <Tabs
                    activeKey={tabKey}
                    onChange={(e) => {
                        setTabKey(e)
                        form.resetFields()
                    }}
                    items={[
                        {
                            key: 'pwd',
                            label: '密码登录',
                            children: (
                                <LoignPassword />
                            )
                        },
                        {
                            key: 'phone',
                            label: '短信登录',
                            children: (
                                <LoginPhone />
                            )
                        },
                    ]}
                />
                <Form.Item>
                    <Button loading={loading} style={buttonStyle} htmlType='submit' type='primary' block>登录</Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType='reset' style={buttonStyle} block>注册</Button>
                </Form.Item>
            </Form>


        </Modal>
    )
}