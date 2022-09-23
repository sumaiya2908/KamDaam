import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';

import { loading, error, success } from './states'
import config from "../src/config";

const initialUser = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        userInfo: initialUser,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('user', action.payload);
        },
        logoutSuccess: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('user')
        },
        getUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export default userSlice.reducer;

const { loginSuccess, logoutSuccess, getUsers } = userSlice.actions

export const login = ({ email, password }) => async dispatch => {
    dispatch(loading())
    try {
        let { data } = await Axios({ url: 'http://localhost:3000/user/login', data: { email, password }, method: 'post' })
        dispatch(success())
        dispatch(loginSuccess(data.token))
    }
    catch (err) {
        console.log(err)
        dispatch(error(err.message))
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutSuccess(null))
}

export const signin = ({ email, password, name }) => async dispatch => {
    dispatch(loading(null))
    try {
        await Axios.post("http://localhost:3000/user/register", { email, password, name })
        dispatch(success(null))
    }
    catch (err) {
        dispatch(error(err.message))
    }
}

export const userList = () => async dispatch => {
    try {
        let { data } = await Axios.get("http://localhost:3000/user/all",
            config
        );
        dispatch(getUsers(data))
    }
    catch (err) {
        dispatch(error(err.message))
        console.log(err)
    }
}