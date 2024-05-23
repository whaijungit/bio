import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState: MenuState = {
    menuSelectKeys: [],
    openSelectKeys: []
}

export const menuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers: {
        setMenuSelectedKeys(state, action: PayloadAction<string[]>) {
            state.menuSelectKeys = action.payload
        },
        setMenuOpenKeys(state, action: PayloadAction<string[]>) {
            state.menuSelectKeys = action.payload
        }
    }
})

export const useMenu = () =>{
    const dispatch = useDispatch()
    const menuState = useSelector<AppState,MenuState>(store=>store.menu)
    return {
        dispatch,
        menuState
    }
}
