
import React from "react";
import './index.css';
import store from "./store";
import App from "./src/App";
import {createRoot} from "react-dom/client"
import { Provider } from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);