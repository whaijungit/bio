declare interface LoginPasswordParam {
    username: string
    password: string
}

declare interface RespPagantion<T> {
    msg: string
    code: number
    data: {
        results: T[]
        count: number
    }
}

declare interface Resp<T> {
    data: T
    msg: string
    code: number
}