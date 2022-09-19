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
