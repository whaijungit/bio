declare interface AppState {
    user: UserState
}

declare interface UserState {
    data: any | null
    loading: boolean
    isLogin: boolean
}