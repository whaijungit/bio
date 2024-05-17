import { http } from './http'

export const getSystemUserList = async (params?: any) => {
    return await http.get(`/system/users/`, { params }) as RespPagantion<User>
}

export const findBySystemUserId = async (id: number) => {
    return await http.get(`/system/users/${id}/`) as Resp<User>
}

export const addSystemUser = async (params: User) => {
    return await http.post(`/system/users/`, params) as Resp<User>
}

export const updataSystemUser = async (id: number, params: User) => {
    return await http.put(`/system/users/${id}/`, params) as Resp<User>
}

export const removeSystemUser = async (id: number) => {
    return await http.delete(`/system/users/${id}/`) as Resp<User>
}

export const changeSystemUserActive = async (id: number, value: boolean) => {
    return await http.patch(`/system/users/${id}/`, { is_active: value ? 1 : 0 }) as Resp<User>
}

export const adminResetSystemUser = async (id: number, params: User) => {
    return await http.patch(`/system/users/reset-password/${id}/`, params) as Resp<User>
}

export const adminSystemUserAssignRole = async (id: number, roles_ids: number[]) => {
    return await http.post(`/system/users/assign_roles/`,{user_id: id,roles_ids}) as Resp<User>
}