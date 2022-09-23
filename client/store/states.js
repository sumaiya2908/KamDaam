import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: 'states',
    initialState: {
        loading: false,
        error: '',
        success: false
    },
    reducers: {
        loading: (state, action) => {
            state.loading= true,
            state.success= false,
            state.error = ''
        },
        error: (state, action) => {
            state.loading=false,
            state.success=false,
            state.error=action.payload
        },
        success: (state, action)=> {
            state.loading=false,
            state.success=true,
            state.error=''
        }
    }
})

export default stateSlice.reducer;

export const {loading, error, success} = stateSlice.actions

