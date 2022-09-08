import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeScreen/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/sign-up" element={<Signup/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App