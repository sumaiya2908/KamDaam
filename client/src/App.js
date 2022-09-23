import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import {
	HomeScreen,
	Login,
	Signup,
	CartScreen,
	ProductScreen,
	UserProfile,
} from "./Screens";
import { UserList, AddProduct } from "./Admin";
import Navbar from "./Components/Navbar";

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
