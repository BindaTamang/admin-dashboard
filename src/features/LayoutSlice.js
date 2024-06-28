import {createSlice} from '@reduxjs/toolkit' 
export const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        isSidebarOpen: false,
    },
    reducers: {
       openSidebar: (state) => {
            state.isSidebarOpen = true;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
        toggleSisebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})
export const {openSidebar, closeSidebar, toggleSisebar} = layoutSlice.actions;
export default layoutSlice.reducer;