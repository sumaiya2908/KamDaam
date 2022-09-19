import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import cart from './cart';
import state from './states';
import product from './product'

const reducer = combineReducers({
    user,
    cart,
    state,
    product
})

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})