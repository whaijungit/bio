import { Button, Checkbox } from "antd"
import { useState } from "react"
import { editor, plus, remove } from "../icons"

export const RoleContainer: React.FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='role-container'>
                <div className='role-list'>
                    <div className='role-title'>
                        <span>角色</span>
                        <Button icon={plus} type="primary">新建角色</Button>
                    </div>
                    <div className='role-items'>
                        <div className="role-item">
                            <span className='role-title'>开发者</span>
                            <span className='role-action'>
                                <span className='editor'>
                                    {editor}
                                </span>
                                <span className='remove'>
                                    {remove}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='role-permission'>
                    <div className='permission-title'>
                        <span>开发者权限</span>
                        <div>云工具、多组学流程开发人员（角色描述）</div>
                    </div>
                    <div className='permission-table'>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
