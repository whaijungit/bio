import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
    data: null,
    loading: false,
    isLogin: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<User | null>) {
            state.data = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        setIsLogin(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload
        }
    }
})