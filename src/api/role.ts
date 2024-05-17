import { http } from './http'

export const getSystemRoleList = async (params?: any) => {
    return await http.get(`/system/roles/`, { params }) as RespPagantion<Role>
}

export const findBySystemRoleId = async (id: number) => {
    return await http.get(`/system/roles/${id}/`) as Resp<Role>
}

export const addSystemRole = async (params: User) => {
    return await http.post(`/system/roles/`, params) as Resp<Role>
}

export const updataSystemRole = async (id: number, params: User) => {
    return await http.put(`/system/roles/${id}/`, params) as Resp<Role>
}

export const removeSystemRole = async (id: number) => {
    return await http.delete(`/system/roles/${id}/`) as Resp<Role>
}
