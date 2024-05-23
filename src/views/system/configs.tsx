import { awit } from '@/utils'
import { Actions } from '@/config'
import { getSystemRoleList } from '@/api/role'
import { plus, search_icon } from '@/components/icons'
import { usePagantion } from '@/compisition/usePagantion'
import DrawerUserForm from '@/components/users/drawer_user_form'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Dropdown, Flex, Input, Popconfirm, Select, Space, Switch, Table, TableProps, message } from 'antd'
import { addSystemUser, adminResetSystemUser, adminSystemUserAssignRole, changeSystemUserActive, findBySystemUserId, getSystemUserList, removeSystemUser, updataSystemUser } from '@/api/user'

const Configs: React.FC = () => {
    const [total, setTotal] = useState(10)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState<User[]>([])
    const [search, setSearch] = useState<string>()
    const [role_list, setRole_list] = useState<Role[]>([])
    const [selectedUser, setSelectedUser] = useState<User>()
    const [submitLoading, setSubmitLoading] = useState(false)
    const [action, setAction] = useState<Actions>(Actions.add)
    const [openDrawerForm, setOpenDrawerForm] = useState(false)
    const columns = useMemo<TableProps<User>['columns']>(() => [
        {
            title: '序号',
            render(_, __, index) {
                return index + 1
            }
        },
        {
            title: '姓名',
            dataIndex: 'realname',
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
        },
        {
            title: '邮箱',
            ellipsis: true,
            dataIndex: 'email',
        },
        {
            width: 450,
            title: '角色',
            dataIndex: 'role',
            ellipsis: true,
            render(_, item) {
                return (
                    <Select
                        virtual
                        allowClear
                        mode='multiple'
                        maxTagCount={3}
                        style={{ width: 390 }}
                        defaultValue={item.roles_list}
                        onChange={e => handleChangeRole(item, e)}
                        options={role_list.map(it => ({ ...it, value: it.id, label: it.name }))}
                    />
                )
            }
        },
        {
            title: '角色',
            render(_, item) {
                return (
                    <Switch
                        checkedChildren='启用'
                        unCheckedChildren='禁用'
                        defaultChecked={item.is_active}
                        onChange={e => handleChangeActive(item, e)}
                    />
                )
            }
        },
        {
            width: 300,
            title: '操作',
            fixed: 'right',
            render(_, item) {
                return (
                    <Space size='small'>
                        <Button onClick={() => handleClickColumnItem(item, Actions.view)} size='small' type='link'>详情</Button>
                        <Button onClick={() => handleClickColumnItem(item, Actions.update)} size='small' type='link'>编辑</Button>
                        <Button onClick={() => handleClickColumnItem(item, Actions.changePwd)} size='small' type='link'>修改密码</Button>
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        label: (
                                            <Popconfirm
                                                icon={null}
                                                title='删除用户'
                                                okButtonProps={{ danger: true }}
                                                onConfirm={() => handleRemove(item)}
                                            >
                                                删除
                                            </Popconfirm>
                                        ),
                                        key: 'remove',
                                        style: {
                                            width: 76,
                                            fontWeight: 600,
                                            color: 'var(--primary)'
                                        },
                                    }
                                ]
                            }}
                        >
                            <div className='more-action'>
                                <span>...</span>
                            </div>
                        </Dropdown>
                    </Space>
                )
            }
        }
    ], [role_list])
    const { page, pageSize, onChangePage, onChangePageSize } = usePagantion()


    const fetchData = useCallback(() => {
        (async () => {
            setLoading(true)
            try {
                await awit()
                const r = await getSystemUserList()
                setTotal(r.data.count)
                setDatas(r.data.results)
            } catch (error) { } finally {
                setLoading(false)
            }
        })();
    }, [page, pageSize, search])
    useEffect(fetchData, [page, pageSize, search])
    useEffect(() => {
        fetchRoles()
    }, [])
    const fetchRoles = async () => {
        getSystemRoleList().then(r => {
            setRole_list(r.data.results)
        })
    }
    const handleClickColumnItem = async (item: User, action: Actions) => {
        try {
            const r = await findBySystemUserId(item.id)
            setSelectedUser(r.data)
            setAction(action)
            setOpenDrawerForm(true)
        } catch (error) {

        }
    }
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangePage(1)
        setSearch(e.target.value || undefined)
    }

    const handleRemove = async (item: User,) => {
        setLoading(true)
        try {
            await removeSystemUser(item.id)
            fetchData()
            message.success('删除成功')
        } catch (error) {

        }
    }
    const handleChangeActive = (item: User, value: boolean) => {
        (async () => {
            try {
                setLoading(true)
                await changeSystemUserActive(item.id, value)
                fetchData()
                message.success('修改状态成功', 1)
            } catch (error) {

            } finally {
                setLoading(false)
            }
        })()
    }

    const handleOpenDrawerUserForm = () => {
        setOpenDrawerForm(true)
    }

    const handleChangeRole = async (item: any, roles: number[]) => {
        setLoading(true)
        try {
            await adminSystemUserAssignRole(item.id, roles)
            message.success('授权成功')
            fetchData()
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const handleCloseDrawer = () => {
        setAction(Actions.add)
        setOpenDrawerForm(false)
        setSelectedUser(undefined)
    }

    const handleConfirmDrawerForm = async (values: User) => {
        try {
            setSubmitLoading(true)
            switch (action) {
                case Actions.add:
                    await addSystemUser(values);
                    fetchData()
                    handleCloseDrawer()
                    message.success('新建用户成功')
                    break
                case Actions.update:
                    await updataSystemUser(selectedUser!.id, values)
                    fetchData()
                    handleCloseDrawer()
                    message.success('编辑用户成功')
                    break
                case Actions.changePwd:
                    await adminResetSystemUser(selectedUser!.id, values)
                    fetchData()
                    handleCloseDrawer()
                    message.success('修改密码成功')
                    break
            }
        } catch (error) {

        } finally {

            setSubmitLoading(false)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <DrawerUserForm
                action={action}
                open={openDrawerForm}
                onClose={handleCloseDrawer}
                initialValues={selectedUser}
                submitLoading={submitLoading}
                onConfirm={handleConfirmDrawerForm}
            />
            <Flex style={{ marginBottom: 20 }} justify='space-between'>
                <Space>
                    <Input allowClear placeholder='输入用户姓名或邮箱' prefix={search_icon} value={search} onChange={handleSearch} />
                </Space>
                <Space>
                    <Button onClick={handleOpenDrawerUserForm} icon={plus} type='primary'>新建用户</Button>
                </Space>
            </Flex>
            <Table
                rowKey={'id'}
                columns={columns}
                loading={loading}
                dataSource={datas}
                rowHoverable={false}
                scroll={{ x: 1200 }}
                pagination={{
                    total,
                    pageSize,
                    current: page,
                    onChange(page, pageSize) {
                        onChangePage(page)
                        onChangePageSize(pageSize)
                    },
                }}
            />
        </div>
    )
}

export default Configs;
