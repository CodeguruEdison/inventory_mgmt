import {createSlice,PayloadAction} from '@reduxjs/toolkit'

export interface InitialStateTypes{
    isSidebarCollapsed:boolean;
    isDarkMode:boolean;
}
const initialState:InitialStateTypes={
    isSidebarCollapsed:false,
    isDarkMode:false
}
export const globalSlice =createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSideBarCollapsed:(state:InitialStateTypes,action:PayloadAction<boolean>)=>{
             state.isSidebarCollapsed =action.payload;
        },
        setIsDarkMode:(state:InitialStateTypes,action:PayloadAction<boolean>)=>{
            state.isDarkMode =action.payload;
       },
    }
})
export const {setIsSideBarCollapsed,setIsDarkMode} = globalSlice.actions
export default globalSlice.reducer