import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { menuSlice } from './menuSlice'

export const store = configureStore<AppState>({
    reducer: {
        user: userSlice.reducer,
        menu: menuSlice.reducer
    }
})