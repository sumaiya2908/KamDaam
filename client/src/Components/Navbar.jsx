import React from "react";
import { Link } from "react-router-dom";
import {
	Logo,
	SearchIcon,
	CartIcon,
	AccountIcon,
} from "../../public/images/index";

function Navbar() {
	return (
		<div className="nav-container bg-white border-b-2">
		<div className="navbar flex justify-evenly container">
			<div className="logo">
				<Logo />
			</div>
			<div className="search-bar w-2/3 text-center">
				<input type="text" className="input-search-box" placeholder="Search...." />
			</div>
			<div className="nav-items flex">
				<Link to="/cart"><CartIcon className="mr-8"/></Link>
				<Link to="/user-profile"><AccountIcon /></Link>
			</div>
		</div>
		</div>
		
	);
}

export default Navbar;
