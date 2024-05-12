import { MenuProps } from "antd"
import { Link, path_link } from "./token"
import { NavLink } from "react-router-dom"
import { dashbord, analysis_icon, userIcon, role_icon, tool_icon, data_icon, project_icon, permission, operation_icon, files_icon, options_icon, message_icon, borad_icon, feedback_icon } from '@/components/icons'

const menuItemStyle: React.CSSProperties = {
    fontSize: 16,
}

export const task_menu: MenuProps['items'] = [
    {
        key: path_link.task,
        icon: dashbord,
        style: menuItemStyle,
        label: <NavLink to={path_link.task}>总览</NavLink>
    },
    {
        key: 'analysis',
        icon: analysis_icon,
        style: menuItemStyle,
        label: <span>我的分析</span>,
        children: [
            {
                style: menuItemStyle,
                key: path_link.task_analysisTools,
                label: <NavLink to={path_link.task_analysis_projects}>项目</NavLink>
            },
            {
                style: menuItemStyle,
                key: path_link.task_analysis_projects,
                label: <NavLink to={path_link.task_analysisTools}>工具</NavLink>
            },
        ]
    },
    {
        key: 'data',
        icon: data_icon,
        style: menuItemStyle,
        label: <span>我的数据</span>,
        children: [
            {
                key: path_link.task_data_projects,
                label: <NavLink to={path_link.task_data_projects}>项目</NavLink>
            },
            {
                key: path_link.task_data_tools,
                label: <NavLink to={path_link.task_data_tools}>工具</NavLink>
            },
        ]
    }
]

export const system_menu: MenuProps['items'] = [
    {
        key: path_link.system,
        style: menuItemStyle,
        icon: dashbord,
        label: <NavLink to={path_link.system}>总览</NavLink>
    },
    {
        icon: userIcon,
        key: Link.users,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_users}>用户管理</NavLink>
    },
    {
        key: Link.roles,
        icon: role_icon,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_roles}>角色管理</NavLink>
    },
    {
        icon: permission,
        key: Link.permissions,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_roles}>权限管理</NavLink>
    },
    {
        icon: tool_icon,
        key: Link.tools,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_tools}>工具管理</NavLink>
    },
    {
        icon: operation_icon,
        key: Link.operations,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_operations}>运营管理</NavLink>
    },
    {
        icon: files_icon,
        key: Link.files,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_files}>文件管理</NavLink>
    },
    {
        key: Link.options,
        icon: options_icon,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_options}>选项管理</NavLink>
    },
    {
        key: Link.configs,
        icon: options_icon,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_configs}>全局配置</NavLink>
    },
    {
        type: 'divider',
        style: menuItemStyle,

    },
    {
        icon: project_icon,
        key: Link.projects,
        style: menuItemStyle,
        label: <NavLink to={path_link.system_projects}>项目管理</NavLink>
    },
]

export const message_menu: MenuProps['items'] = [
    {
        icon: message_icon,
        style: menuItemStyle,
        key: path_link.message,
        label: <NavLink to={path_link.message}>私信</NavLink>
    },
    {
        icon: borad_icon,
        style: menuItemStyle,
        key: path_link.message_borad,
        label: <NavLink to={path_link.message_borad}>公告</NavLink>
    },
    {
        icon: feedback_icon,
        style: menuItemStyle,
        key: path_link.message_feedback,
        label: <NavLink to={path_link.message_feedback}>反馈</NavLink>
    },
]