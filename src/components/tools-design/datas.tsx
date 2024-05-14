import { Checkbox, Collapse, Flex, Input, InputNumber, Radio, Select, Slider, Switch } from 'antd';
import { ComponentImp } from './interface';

export const componentMap: ComponentImp = {
    input: (schame) => <Input {...schame.componentProps} />,
    select: (schema) => <Select {...schema.componentProps} />,
    switch: (schema) => <Switch {...schema.componentProps} />,
    collapse: (schema) => <Collapse {...schema.componentProps} />,
    radio: (schema) => <Radio.Group {...schema.componentProps} />,
    textArea: (schema) => <Input.TextArea {...schema.componentProps} />,
    checkbox: (schema) => <Checkbox.Group {...schema.componentProps} />,
    inputNumebr: (schema) => <InputNumber {...schema.componentProps} />,
    chooseData: () => <>
        chooseData
    </>,
    inputNumberSlider: (schema) => (
        <Flex gap={20}>
            <Slider {...schema.componentProps} />
            <InputNumber {...schema.componentProps} />
        </Flex>
    ),
    selects: (schema) => <Select {...schema.componentProps} mode='multiple' />,
}

export type Type = keyof typeof componentMap