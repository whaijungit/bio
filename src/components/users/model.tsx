import { FormItemProps, Input, Radio } from "antd"

export const useFormItems: FormItemProps[] = [
    {
        label: '姓名',
        name: 'realname',
        rules: [{ required: true, message: '请输入姓名' }],
        children: <Input allowClear placeholder="请输入姓名" />
    },
    {
        name: 'gender',
        label: '性别',
        rules: [{ required: true, message: '请选择性别' }],
        children: <Radio.Group options={[{ label: '男', value: '男' }, { label: '女', value: '女' }]} />
    },
    {
        name: 'mobile',
        label: '手机号',
        rules: [{ required: true, message: '请输入手机号' }],
        children: <Input allowClear placeholder="请输入手机号" />
    },
    {
        label: '密码',
        name: 'password',
        rules: [{ required: true, message: '请输入密码' }],
        children: <Input.Password autoComplete="new-password" allowClear placeholder='请输入密码' />
    },
    {
        label: '确认密码',
        name: 'confirm_password',
        dependencies: ['password'],
        rules: [{ required: true, message: '请输入确认密码' }, ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('两次密码不一致'));
            },
        }),],
        children: <Input.Password autoComplete='new-password' allowClear placeholder='请输入确认密码' />,
    },
    {
        label: '邮箱',
        name: 'email',
        children: <Input allowClear placeholder='请输入邮箱' />,
        rules: [{ required: true, message: '请输入邮箱' }, { type: 'email', message: '邮箱格式不正确' }],
    },
    {
        label: '单位',
        name: 'company',
        rules: [{ required: true, message: '请输入单位' }],
        children: <Input allowClear placeholder='请输入单位' />,
    },
    {
        label: '专业',
        name: 'profession',
        rules: [{ required: true, message: '请输入专业' }],
        children: <Input allowClear placeholder='请输入专业' />,
    },
    {
        label: '研究方向',
        name: 'research',
        rules: [{ required: true, message: '请输入研究方向' }],
        children: <Input allowClear placeholder='请输入课题组研究方向' />,
    }
]
