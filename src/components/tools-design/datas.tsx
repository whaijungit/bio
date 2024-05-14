import { ComponentImp } from './interface';
import { Button, Checkbox, Collapse, Flex, Input, InputNumber, Radio, Select, Slider, Switch } from 'antd';

export const componentMap: ComponentImp = {
    input: (schame) => <Input {...schame.componentProps} />,
    select: (schema) => <Select {...schema.componentProps} />,
    switch: (schema) => <Switch {...schema.componentProps} />,
    collapse: (schema) => <Collapse {...schema.componentProps} />,
    radio: (schema) => <Radio.Group {...schema.componentProps} />,
    textArea: (schema) => <Input.TextArea {...schema.componentProps} />,
    checkbox: (schema) => <Checkbox.Group {...schema.componentProps} />,
    inputNumebr: (schema) => <InputNumber {...schema.componentProps} />,
    chooseData: () => (
        <div className='choose-data'>
            <div className='choose-data-input'>
                <Input />
            </div>
            <div className='choose-data-input'>
                <div className='choose-data-action'>下载示例文件</div>
                <div className='choose-data-action'>使用示例文件</div>
                <div>
                    <Button type='primary'>选择数据</Button>
                </div>
            </div>
        </div>
    ),
    inputNumberSlider: (schema) => (
        <Flex gap={20}>
            <Slider {...schema.componentProps} />
            <InputNumber {...schema.componentProps} />
        </Flex>
    ),
    selects: (schema) => <Select {...schema.componentProps} mode='multiple' />,
}

export type Type = keyof typeof componentMap