import { Type } from './datas'
import type { TextAreaProps } from 'antd/es/input'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import type { CascaderProps, CollapseProps, ColorPickerProps, FormItemProps, InputNumberProps, InputProps, RadioGroupProps, SelectProps, SliderSingleProps, SwitchProps } from 'antd'

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
    select: CustomComponentFunction<SelectProps>
    switch: CustomComponentFunction<SwitchProps>
    selects: CustomComponentFunction<SelectProps>
    radio: CustomComponentFunction<RadioGroupProps>
    textArea: CustomComponentFunction<TextAreaProps>
    collapse: CustomComponentFunction<CollapseProps>
    checkbox: CustomComponentFunction<CheckboxGroupProps>
    inputNumebr: CustomComponentFunction<InputNumberProps>
    inputNumberSlider: CustomComponentFunction<InputNumberProps & SliderSingleProps>
}