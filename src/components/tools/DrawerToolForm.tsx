import { Actions } from "@/config"
import { Editor } from "@monaco-editor/react"
import { Button, Drawer, Flex, Form } from "antd"
import { useCallback, useEffect, useState } from "react"

export interface DrawerToolFormProps {
    open?: boolean
    action?: Actions
    initialValues?: Tool
    submitLoading?: boolean
}

export interface DrawerToolFormEvent {
    onClose?: () => void
    onConfirm?: (values: Tool) => void
}

export const DrawerToolForm: React.FC<DrawerToolFormProps & DrawerToolFormEvent> = (props) => {
    const [form] = Form.useForm<Tool>()
    const [open, setOpen] = useState(false)
    const [drawerTitle, setDrawerTitle] = useState<string>()
    const [width, setWidth] = useState(window.innerWidth - 240)
    const handleChangeSize = useCallback(() => {
        setWidth(window.innerWidth - 240)
    }, [])
    useEffect(() => {
        if (props.initialValues) {
            form.resetFields()
        }
        return () => {
            form.resetFields()
        }
    }, [form, props.initialValues])

    useEffect(() => {
        window.addEventListener('resize', handleChangeSize)
        return () => {
            window.removeEventListener('resize', handleChangeSize)
        }
    }, [handleChangeSize])

    const title = () => {
        switch (props.action) {
            case Actions.add:
                return '新建工具'
            case Actions.update:
                return `编辑【${props.initialValues?.name_zh}】工具`
            default:
                return null
        }
    }

    const handleClickToolDoc = () => {
        setOpen(true)
        setDrawerTitle('工具文档参数')
    }
    const handleClickToolUiConfig = () => {
        setOpen(true)
        setDrawerTitle('工具界面配置')
    }
    const handleClickToolParam = () => {
        setOpen(true)
        setDrawerTitle('工具分析参数')
    }
    const handleCloseViewDrawer = () => {
        setOpen(false)
        setDrawerTitle(undefined)
    }

    return (
        <>
            <Form<Tool>
                form={form}
                id="toolsForm"
                requiredMark={false}
                labelCol={{ span: 5 }}
                onFinish={props.onConfirm}
                initialValues={props.initialValues}
            >
                <Drawer
                    width={width}
                    title={title()}
                    open={props.open}
                    maskClosable={false}
                    getContainer='#toolsForm'
                    onClose={props.onClose}
                    footer={
                        <Flex justify='flex-end' gap={20}>
                            <Button onClick={props.onClose} htmlType="reset">取消</Button>
                            <Button.Group>
                                <Button onClick={handleClickToolDoc} htmlType="reset">文档参数</Button>
                                <Button onClick={handleClickToolUiConfig} htmlType="reset">界面配置</Button>
                                <Button onClick={handleClickToolParam} htmlType="reset">分析参数</Button>
                            </Button.Group>
                            <Button.Group>
                                <Button htmlType="submit" type="primary">保存</Button>
                                <Button htmlType="submit" type="primary">审核</Button>
                            </Button.Group>
                        </Flex>
                    }
                >

                </Drawer>
            </Form>
            <Drawer
                open={open}
                title={drawerTitle}
                width={width - 240}
                onClose={handleCloseViewDrawer}
            >
                <Editor />
            </Drawer>
        </>
    )
}

export default DrawerToolForm;
