import { createSlice } from "@reduxjs/toolkit";
import  Axios from "axios";
import {loading, error, success} from './states'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList : [],
        product: {},
    },
    reducers: {
        listProducts: (state, action) => {
            state.productList = action.payload
        },
        singleProduct: (state, action) => {
            state.product=action.payload
        }
    }
})

export default productSlice.reducer

const {listProducts, singleProduct} = productSlice.actions

export const getProducts = () => async dispatch => {
    dispatch(loading())
    try {
        let {data} = await Axios({url: 'http://localhost:3000/product/all', method: 'get'})
        dispatch(success())
        dispatch(listProducts(data))

    }
    catch(err) {
        dispatch(error(err.message))
    }
}

export const addProduct = () => async dispatch => {
    dispatch(loading())
    try {
        let product = {}
        const {data} = Axios({url: 'http://localhost:3000/product',  data: product, method: 'POST'})
        dispatch(success())
    }

    catch(err) {
        dispatch(error(err.message))
    }
}

export const getProduct = ({product}) => async dispatch => {
    dispatch(loading())
    try {
        const {data} = Axios({url: `http://localhost:3000/product/${product}`, method: 'GET'})
        dispatch(success())
        dispatch(singleProduct(data))
    }
    catch(err) {
        dispatch(error(err.message))
    }
}