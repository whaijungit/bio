import './index.less'
import { AnyObject } from 'antd/es/_util/type'
import type { FormItemProps, TableProps } from 'antd'
import { plus, search_icon } from '@/components/icons'
import { Button, Flex, Form, Input, Space, Table } from 'antd'

interface TableSectionProps<D = any> {
    formItems: FormItemProps[]
    tableProps: TableProps<D>
}



export const TableSection = function <T extends AnyObject>(props: TableSectionProps<T>) {
    return (
        <section className='table-section'>
            <Flex justify='space-between' style={{ marginBottom: 20 }}>
                <Form layout='inline'>
                    <Form.Item name='search'>
                        <Input prefix={search_icon} />
                    </Form.Item>
                </Form>
                <Space>
                    <Button type='primary' icon={plus}>新建用户</Button>
                </Space>
            </Flex>
            <Table {...props.tableProps} />
        </section>
    )
}

