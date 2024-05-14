import { message } from 'antd';

/** 表单错误提示处理 */
export const afer = (errorInfo: ValidateErrorEntity, duration: number = 1) => message.error(errorInfo.errorFields.map(it => it.errors.join('、')).join('、'), duration)