declare interface AppState {
    user: UserState
    menu: MenuState
}

declare interface UserState {
    data: any | null
    loading: boolean
    isLogin: boolean
}

declare interface MenuState {
    menuSelectKeys: string[]
    openSelectKeys: string[]
}