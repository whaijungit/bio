import { awit } from '@/utils';
import { plus, search_icon } from '@/components/icons'
import { usePagantion } from '@/compisition/usePagantion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Dropdown, Flex, Input, Select, Space, Switch, Table, TableProps, message } from 'antd';

const userDatas: any[] = []
const roleDatas: any[] = []
for (let i = 0; i < 1000; i++) {
    userDatas.push({
        id: i + 1,
        role: 1,
        is_active: Math.random() > 0.5 ? false : true,
        name: `item-${i + 1}`
    })
    if (i <= 20) {
        roleDatas.push({
            id: i + 1,
            role_name: '管理员-' + (i + 1)
        })
    }
}

const Users: React.FC = () => {
    const [total, setTotal] = useState(10)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState<any[]>([])
    const [search, setSearch] = useState<string>()
    const [role_list, setRole_list] = useState<any[]>([])
    const columns = useMemo<TableProps<any>['columns']>(() => [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
        },
        {
            width: 550,
            title: '角色',
            dataIndex: 'role',
            render(_, item) {
                return (
                    <Select
                        virtual
                        allowClear
                        maxTagCount={3}
                        mode='multiple'
                        style={{ width: 450 }}
                        defaultValue={item.role}
                        onChange={e => {
                            console.log(e)
                            handleChangeRole(item, e)
                        }}
                        options={role_list.map(it => ({ ...it, value: it.id, label: it.role_name }))}
                    />
                )
            }
        },
        {
            title: '角色',
            render(record) {
                return <Switch defaultChecked={record.is_active} />
            }
        },
        {
            width: 300,
            title: '操作',
            fixed: 'right',
            render() {
                return (
                    <Space size='small'>
                        <Button size='small' type='link'>详情</Button>
                        <Button size='small' type='link'>编辑</Button>
                        <Button size='small' type='link'>修改密码</Button>
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        label: '删除',
                                        key: 'remove',
                                        style: {
                                            width: 76,
                                            fontWeight: 600,
                                            color: 'var(--primary)'
                                        }
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
                console.log('params====>', {
                    page,
                    pageSize,
                    search,
                })
                setDatas(userDatas)
                setRole_list(roleDatas)
                setTotal(userDatas.length)
            } catch (error) {
                console.log('error params====>', {
                    page,
                    pageSize,
                    search,
                })
            } finally {
                setLoading(false)
            }
        })();
    }, [page, pageSize, search])
    useEffect(fetchData, [page, pageSize, search])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangePage(1)
        setSearch(e.target.value || undefined)
    }

    const handleChangeRole = async (item: any, roles: number[]) => {
        setLoading(true)
        try {
            await awit()
            console.log('role=======>', {
                item,
                roles,
            })
            message.success('授权成功')
            fetchData()
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <Flex style={{ marginBottom: 20 }} justify='space-between'>
                <Space>
                    <Input allowClear placeholder='输入用户姓名或邮箱' prefix={search_icon} value={search} onChange={handleSearch} />
                </Space>
                <Space>
                    <Button icon={plus} type='primary'>新建用户</Button>
                </Space>
            </Flex>
            <Table
                columns={columns}
                loading={loading}
                scroll={{ x: 1200 }}
                rowHoverable={false}
                dataSource={datas}
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

export default Users;
