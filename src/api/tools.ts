import { http } from './http'

export const getSystemToolList = async (params?: any) => {
    return await http.get(`/system/tool/`, { params }) as RespPagantion<Tool>
}

export const findBySystemToolId = async (id: number) => {
    return await http.get(`/system/tool/${id}/`) as Resp<Tool>
}

export const addSystemTool = async (params: Tool) => {
    return await http.post(`/system/tool/`, params) as Resp<Tool>
}

export const updataSystemTool = async (id: number, params: Tool) => {
    return await http.put(`/system/tool/${id}/`, params) as Resp<Tool>
}

export const removeSystemTool = async (id: number) => {
    return await http.delete(`/system/tool/${id}/`) as Resp<Tool>
}

export const changeSystemToolActive = async (id: number, value: boolean) => {
    return await http.patch(`/system/tool/${id}/`, { is_active: value ? 1 : 0 }) as Resp<Tool>
}

export const adminResetSystemTool = async (id: number, params: Tool) => {
    return await http.patch(`/system/tool/reset-password/${id}/`, params) as Resp<Tool>
}

export const adminSystemToolAssignRole = async (id: number, roles_ids: number[]) => {
    return await http.post(`/system/users/assign_roles/`,{user_id: id,roles_ids}) as Resp<Tool>
}