import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import CartScreen from "./Screens/CartScreen";
import UserProfile from "./Screens/UserProfile";
import UserList from "./Admin/UserList";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
				<Route exact path='/' element={<HomeScreen />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/sign-up' element={<Signup />}></Route>
				<Route path='/cart' element={<CartScreen />}></Route>
				<Route path='/user-profile' element={<UserProfile />}></Route>
				<Route path='/admin/userlist' element={<UserList />}></Route>
				<Route path='/add-product' element={<AddProduct />}></Route>
				<Route path='/product/:id' element={<ProductScreen />}></Route>
            </Routes>
        </BrowserRouter>
	);
};

export default App;

export default App