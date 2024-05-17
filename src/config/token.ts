import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import type { ConfigProviderProps } from 'antd'
dayjs.locale('zh-cn')

export const Link = {
    index: '/',
    tools: 'tools',
    groups: 'groups',
    task: 'task',
    roles: 'roles',
    files: 'files',
    users: 'users',
    system: 'system',
    configs: 'configs',
    options: 'options',
    dashbord: 'dashbord',
    projects: 'projects',
    operations: 'operations',
    permissions: 'permissions',
    gene_versions: 'gene_versions',
}

export const path_link = {
    task: `/${Link.task}`,
    tools: `/${Link.tools}`,
    group: `/${Link.groups}`,
    system: `/${Link.system}`,
    user: `/user`,
    message: `/message`,
    message_borad: `/message/borad`,
    message_feedback: `/message/feedback`,

    task_analysisTools: `/${Link.task}/analysis_tools`,
    task_analysis_projects: `/${Link.task}/analysis_projects`,
    task_data_tools: `/${Link.task}/data_tools`,
    task_data_projects: `/${Link.task}/data_projects`,

    system_users: `/${Link.system}/${Link.users}`,
    system_files: `/${Link.system}/${Link.files}`,
    system_tools: `/${Link.system}/${Link.tools}`,
    system_roles: `/${Link.system}/${Link.roles}`,
    system_configs: `/${Link.system}/${Link.configs}`,
    system_options: `/${Link.system}/${Link.options}`,
    system_projects: `/${Link.system}/${Link.projects}`,
    system_operations: `/${Link.system}/${Link.operations}`,
    system_permission: `/${Link.system}/${Link.permissions}`,
}

export enum Actions {
    add = 'add',
    view = 'view',
    remove = 'remove',
    update = 'update',
    changePwd = 'changePwd',
}

export const configProviderProps: ConfigProviderProps = {
    locale,
    componentSize: 'large',
    menu: {
        style: {
            borderInlineEnd: 'none',
            backgroundColor: 'transparent',
        },

    },

    theme: {
        token: {
            fontSize: 14,
            borderRadius: 4,
            colorPrimary: '#0C6DFF',
            colorPrimaryText: '#181D28',
        }
    }
}