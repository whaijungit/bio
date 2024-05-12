import { plus, search_icon } from '../icons'
import { Button, DatePicker, Input, Select, Table } from 'antd'
import type { ButtonProps, InputProps, SelectProps, TableProps } from 'antd'

interface ProTableProps {
    tableProps?: TableProps
    searchProps?: InputProps
    selectProps?: SelectProps
    createButtonProps?: ButtonProps
    refreshButtonProps?: ButtonProps
    actionButtonEnums?: ['csv', 'tsv']
}

export const ProTable: React.FC<ProTableProps> = (props) => {
    return (
        <>
            <div className='pro-table'>
                <div className='pro-table-header'>
                    <div className='pro-table-filter'>
                        <div className='filter-item'>
                            <Input {...props.searchProps} prefix={search_icon} allowClear />
                        </div>
                        <div className='filter-item'>
                            <DatePicker.RangePicker allowClear />
                        </div>
                        <div className='filter-item'>
                            <Select {...props.selectProps} allowClear />
                        </div>
                        <div className='filter-item'>
                            <Button {...props.refreshButtonProps} >refresh</Button>
                        </div>
                    </div>
                    <div className='pro-table-action'>
                        <Button type='primary' danger >export csv</Button>
                        <Button type='primary' danger >export tsv</Button>
                        <Button icon={plus} type='primary'>新建用户</Button>
                    </div>
                </div>
                <div className='pro-table-box'>
                    <Table {...props.tableProps} />
                </div>
            </div>
        </>
    )
}