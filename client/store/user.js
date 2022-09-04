import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios'

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: initialUser,
        loading: false,
        error: null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload
            state.loading = true
            state.error = null
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        loginLoading: (state, action) => {
            state.loading = true
            state.error = null
        },
        loginError: (state, action) => {
            state.error = action.payload
            state.loading = false
            state.userInfo = null

        },
        logoutSuccess: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('user')
        }
    }
})

export default userSlice.reducer;

const {loginSuccess, logoutSuccess} = userSlice.actions

export const login = ({email, password}) => async dispatch => {
    dispatch(loginLoading(null))
    try {
        await Axios.post('http://localhost:3000/user/login', {email, password})
        dispatch(loginSuccess(email))
    }
    catch(err) {
        dispatch(loginError(err.message))
        return console.log(err.message)
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutSuccess(null))
}