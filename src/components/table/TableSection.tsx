import './index.less'
import { plus, search_icon } from '@/components/icons';
import { Button, Flex, Form, Input, Space, Table } from 'antd';

export const TableSection: React.FC = () => {
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
            <Table />
        </section>
    )
}

