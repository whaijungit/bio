import { Form } from 'antd';
import { ISchema } from './interface';
import { componentMap } from './datas';

export const renderFormItems = (items: ISchema<any>[]) => {
    const nodes = items.map(item => {
        if (item.children && item.children.length > 0) {
            renderFormItems(item.children)
        }
        return (
            <Form.Item key={item.id} {...item.formItemProps}>
                {renderItem(item)}
            </Form.Item>
        )
    })

    return nodes
}

export const renderItem = (item: ISchema<any>) => {
    return componentMap[item.type](item)
}