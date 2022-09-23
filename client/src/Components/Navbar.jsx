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
		<div className="nav-container bg-white border ">
		<div className="navbar flex container w-100">
			<Link to="/"> <div className="logo">
				<Logo />
			</div></Link>
			<div className="search-bar md:w-5/6 text-center">
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
