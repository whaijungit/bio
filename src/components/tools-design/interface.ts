import type { TextAreaProps } from 'antd/es/input'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import type { CascaderProps, CollapseProps, ColorPickerProps, FormItemProps, InputNumberProps, InputProps, RadioGroupProps, SelectProps, SliderSingleProps, SwitchProps } from 'antd'
import { Type } from './datas'

export interface ISchema<ComponentProps = AntComponentProps> {
    /** 组件唯一标识 */
    id: string
    /** 组件类型 */
    type: Type
    /** 子组件 */
    children: ISchema[]
    /** 表单项配置 */
    formItemProps: FormItemProps
    /** 组件配置 */
    componentProps: ComponentProps
}

export type AntComponentProps = InputProps | TextAreaProps | SelectProps | CascaderProps | ColorPickerProps | CheckboxGroupProps | RadioGroupProps

export type CustomComponentFunction<T> = (scheam: ISchema<T>) => React.ReactNode

export interface ComponentImp {
    chooseData: CustomComponentFunction<any>
    input: CustomComponentFunction<InputProps>
    radio: CustomComponentFunction<RadioGroupProps>
    select: CustomComponentFunction<SelectProps>
    switch: CustomComponentFunction<SwitchProps>
    selects: CustomComponentFunction<SelectProps>
    checkbox: CustomComponentFunction<CheckboxGroupProps>
    textArea: CustomComponentFunction<TextAreaProps>
    collapse: CustomComponentFunction<CollapseProps>
    inputNumebr: CustomComponentFunction<InputNumberProps>
    inputNumberSlider: CustomComponentFunction<InputNumberProps & SliderSingleProps>
}