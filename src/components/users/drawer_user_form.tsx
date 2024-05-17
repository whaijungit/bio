import { useEffect } from "react"
import { Actions } from "@/config"
import { useFormItems } from "./model"
import { Button, Drawer, Form, FormItemProps, Space } from "antd"

interface DrawerUserFormProps {
    open?: boolean
    action?: Actions
    initialValues?: User
    submitLoading?: boolean
}

interface DrawerUserFormEvent {
    onClose?: () => void
    onConfirm?: (values: User) => void
}

const DrawerUserForm: React.FC<DrawerUserFormProps & DrawerUserFormEvent> = (props) => {
    const [form] = Form.useForm<User>()
    useEffect(() => {
        if (props.initialValues) {
            form.resetFields()
        }
        return () => {
            form.resetFields()
        }
    }, [form, props.initialValues])
    const renderFormItem = () => {
        let formUserItems: FormItemProps[] = useFormItems
        switch (props.action) {
            case Actions.add:
                break
            case Actions.update:
                formUserItems = formUserItems.filter(it => it.label !== '密码' && it.label !== '确认密码')
                break
            case Actions.changePwd:
                formUserItems = formUserItems.filter(it => it.name === 'password' || it.name === 'confirm_password')
                break
        }
        return formUserItems.map((it, index) => (<Form.Item key={index} {...it} />))
    }

    const title = () => {
        switch (props.action) {
            case Actions.add:
                return '新建用户'
            case Actions.update:
                return `编辑【${props.initialValues?.realname}】用户`
            case Actions.changePwd:
                return `修改【${props.initialValues?.realname}】用户密码`
            default:
                return null
        }
    }

    return (
        <Form<User>
            form={form}
            id="userForm"
            requiredMark={false}
            labelCol={{ span: 5 }}
            onFinish={props.onConfirm}
            initialValues={props.initialValues}
        >
            <Drawer
                width={460}
                title={title()}
                open={props.open}
                getContainer='#userForm'
                onClose={props.onClose}
                footer={
                    <Space>
                        <Button onClick={props.onClose} htmlType="reset">取消</Button>
                        <Button loading={props.submitLoading} htmlType='submit' type="primary">确认</Button>
                    </Space>
                }
            >
                {renderFormItem()}
            </Drawer>
        </Form>
    )
}

export default DrawerUserForm;
