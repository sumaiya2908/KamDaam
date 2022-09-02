import { createSlice } from "@reduxjs/toolkit";
import {Axios} from 'axios'

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

const slice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            localStorage.removeItem('user')
        }
    }
})

export default slice.reducer

const {loginSuccess, logoutSuccess} = slice.actions
export const login = ({email, password}) => async dispatch => {
    try {
        const {data} = await Axios.post('http://localhost:3000/user/login', {email, password})
        dispatch(loginSuccess({email}))
    }
    catch(err) {
        return console.log(err.message)
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutSuccess(null))
}