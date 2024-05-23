import { awit } from '@/utils'
import { Actions } from '@/config'
import { getSystemUserList } from '@/api/user'
import { plus, search_icon } from '@/components/icons'
import { usePagantion } from '@/compisition/usePagantion'
import DrawerToolForm from '@/components/users/drawer_user_form'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Dropdown, Flex, Input, Popconfirm, Select, Space, Switch, Table, TableProps, message } from 'antd'
import { addSystemTool, updataSystemTool, removeSystemTool, getSystemToolList, findBySystemToolId } from '@/api/tools'

const Tools: React.FC = () => {
    const [total, setTotal] = useState(10)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState<Tool[]>([])
    const [search, setSearch] = useState<string>()
    const [users, setUsers] = useState<User[]>([])
    const [selectedTool, setSelectedTool] = useState<Tool>()
    const [submitLoading, setSubmitLoading] = useState(false)
    const [action, setAction] = useState<Actions>(Actions.add)
    const [openDrawerForm, setOpenDrawerForm] = useState(false)
    const columns = useMemo<TableProps<Tool>['columns']>(() => [

        {
            title: '名称',
            dataIndex: 'name_zh',
        },
        {
            title: '英文名',
            dataIndex: 'name_en',
        },
        {
            title: '类型',
            ellipsis: true,
        },
        {
            title: '创建者',
            ellipsis: true,
            dataIndex: 'creator',
            render(_, item) {
                return (
                    <Select
                        virtual
                        allowClear
                        mode='multiple'
                        maxTagCount={3}
                        defaultValue={item.creator}
                        onChange={e => handleChangeRole(item, e)}
                        options={users.map(it => ({ ...it, value: it.id, label: it.realname }))}
                    />
                )
            }
        },
        {
            title: '状态',
            render(_, item) {
                return (
                    <Switch
                        checkedChildren='启用'
                        unCheckedChildren='禁用'
                        defaultChecked={item.enable}
                        onChange={e => handleChangeActive(item, e)}
                    />
                )
            }
        },
        {
            title: '审核',
            render(_, item) {
                return (
                    <Dropdown menu={{style: {backgroundColor: 'var(--light)'},items: [{key: 'success',label: '成功'},{key: 'failed',label: '失败'}]}}>
                        <span className='audit audit-success'>成功</span>
                    </Dropdown>
                    // <Switch
                    //     checkedChildren='启用'
                    //     unCheckedChildren='禁用'
                    //     // defaultChecked={item.is_active}
                    //     onChange={e => handleChangeActive(item, e)}
                    // />
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
                                                title='删除工具'
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
    ], [users])
    const { page, pageSize, onChangePage, onChangePageSize } = usePagantion()


    const fetchData = useCallback(() => {
        (async () => {
            setLoading(true)
            try {
                await awit()
                const r = await getSystemToolList()
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
        getSystemUserList().then(r => {
            setUsers(r.data.results)
        })
    }
    const handleClickColumnItem = async (item: Tool, action: Actions) => {
        try {
            const r = await findBySystemToolId(item.id)
            setSelectedTool(r.data)
            setAction(action)
            setOpenDrawerForm(true)
        } catch (error) {

        }
    }
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangePage(1)
        setSearch(e.target.value || undefined)
    }

    const handleRemove = async (item: Tool,) => {
        setLoading(true)
        try {
            await removeSystemTool(item.id)
            fetchData()
            message.success('删除成功')
        } catch (error) {

        }
    }
    const handleChangeActive = (item: Tool, value: boolean) => {
        (async () => {
            try {
                setLoading(true)
                // await changeSystemToolActive(item.id, value)
                fetchData()
                message.success('修改状态成功', 1)
            } catch (error) {

            } finally {
                setLoading(false)
            }
        })()
    }

    const handleOpenDrawerToolForm = () => {
        setOpenDrawerForm(true)
    }

    const handleChangeRole = async (item: any, roles: number) => {
        setLoading(true)
        try {
            // await adminSystemToolAssignRole(item.id, roles)
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
        setSelectedTool(undefined)
    }

    const handleConfirmDrawerForm = async (values: Tool) => {
        try {
            setSubmitLoading(true)
            switch (action) {
                case Actions.add:
                    await addSystemTool(values);
                    fetchData()
                    handleCloseDrawer()
                    message.success('新建工具成功')
                    break
                case Actions.update:
                    await updataSystemTool(selectedTool!.id, values)
                    fetchData()
                    handleCloseDrawer()
                    message.success('编辑工具成功')
                    break
                case Actions.changePwd:
                    // await adminResetSystemTool(selectedTool!.id, values)
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
            <DrawerToolForm
                action={action}
                open={openDrawerForm}
                onClose={handleCloseDrawer}
                // initialValues={selectedTool}
                submitLoading={submitLoading}
            // onConfirm={handleConfirmDrawerForm}
            />
            <Flex style={{ marginBottom: 20 }} justify='space-between'>
                <Space>
                    <Input allowClear placeholder='输入工具中文或英文名' prefix={search_icon} value={search} onChange={handleSearch} />
                </Space>
                <Space>
                    <Button onClick={handleOpenDrawerToolForm} icon={plus} type='primary'>新建工具</Button>
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

export default Tools;
