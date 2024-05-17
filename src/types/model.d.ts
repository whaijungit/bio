declare interface User {
    /** 用户id */
    id: number
    /** 用户 */
    sex: string
    /** 邮箱 */
    email: string
    /** 手机号 */
    mobile: string
    /** 用户头像 */
    avatar: string
    /** 公司 */
    company: string
    /** 真实姓名 */
    realname: string
    /** 研究方向 */
    research: string
    /** 用户名 */
    username: string
    /** 科室 */
    departmet: string
    /** 专业 */
    profession: string
    is_active: boolean
    permissions: string[]
    user_storage_info: string
    max_storage2: string
    max_storage: number
    roles_list: number[]
    /** 权限 */
    auths: {
        /** 菜单权限 */
        menus: any[]
        /** 操作权限 */
        actions: string[]
    }
    /** 超级管理员 */
    is_superuser: 'True' | 'False'

}

declare interface Role {
    id: number
    name: string
    desc: string
    create_time: string
    update_time: string
    permissions: number[]
}