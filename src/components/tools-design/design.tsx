import { useState } from 'react'
import { ISchema } from './interface'
import { components } from './config'
import { editor } from 'monaco-editor'
import { renderFormItems } from './utils'
import { Editor, EditorProps } from '@monaco-editor/react'
import { Collapse, Form, Input, Select, Spin, Switch } from 'antd'

const editorOption: editor.IStandaloneEditorConstructionOptions = {
    fontSize: 16,
    language: 'json',
}

const editorValue = (object: ISchema<any>[]) => {
    const _run = (object: ISchema<any>[]) => {
        return object.map(item => {
            let { id, type, children, ...reset } = item
            if (item.children && item.children.length > 0) {
                _run(item.children)
            }
            return {
                ...reset,
                children,
            }
        })
    }
    return JSON.stringify(_run(object), null, 4)
}

export const ToolDesign: React.FC = () => {
    const [schame_uiConfig, setSchame_uiConfig] = useState<ISchema<any>[]>(components)

    const handleChangeEditor: EditorProps['onChange'] = (value) => {
        setSchame_uiConfig(JSON.parse(value || ' '))
    }

    return (
        <section className='tool-design'>
            <div className='design-editor'>
                <Editor
                    loading={<Spin />}
                    theme='vs-drak'
                    options={editorOption}
                    onChange={handleChangeEditor}
                    language={editorOption.language}
                    value={editorValue(schame_uiConfig)}
                />
            </div>
            <div className='design-preview'>
                <Form>
                    {renderFormItems(schame_uiConfig)}
                </Form>
            </div>
            <div className='design-preview'>
                <Collapse
                    ghost
                    expandIconPosition='end'
                    items={[
                        {
                            label: '组件配置',
                            children: (
                                <Form>
                                    <Form.Item name='allo' label='提示输入'>
                                        <Input />
                                    </Form.Item>

                                </Form>
                            )
                        },
                        {
                            label: '表单配置',
                            children: (
                                <Form>
                                    <Form.Item name='name' label='参数名字'>
                                        <Select />
                                    </Form.Item>
                                    <Form.Item name='name' label='参数名字'>
                                        <Switch />
                                    </Form.Item>
                                    <Form.Item name='name' label='参数名字'>
                                        <Switch />
                                    </Form.Item>
                                </Form>
                            )
                        }
                    ]}

                />
            </div>
        </section>
    )
}

