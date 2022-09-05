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
        error: null,
        success: false
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
            state.error = null
            state.success = true
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loginLoading: (state, action) => {
            state.loading = true
            state.error = null
        },
        loginError: (state, action) => {
            state.error = action.payload
            state.loading = false
            state.userInfo = null
            state.success = false

        },
        logoutSuccess: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('user')
        },
        signupSuccess: (state, action) => {
            state.success = true
            state.error = null
            state.loading = false
        },
        signupFail: (state, action) => {
            state.success = false
            state.error = action.payload
            state.loading = false
        }
    }
})

export default userSlice.reducer;

const {loginSuccess, logoutSuccess, loginError, loginLoading, signupFail, signupSuccess} = userSlice.actions

export const login = ({email, password}) => async dispatch => {
    dispatch(loginLoading(null))
    try {
        await Axios({url: 'http://localhost:3000/user/login', data: {email, password}, method: 'post'})
        dispatch(loginSuccess(email))
    }
    catch(err) {
        dispatch(loginError(err.message))
        console.log(err.message)
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutSuccess(null))
}

export const signin = ({email, password, name}) => async dispatch => {
    dispatch(loginLoading(null))
    try {
        await Axios.post("http://localhost:3000/user/register", {email, password, name} )
        dispatch(signupSuccess(null))
    }
    catch(err) {
        dispatch(signupFail(err.message))
    }
}