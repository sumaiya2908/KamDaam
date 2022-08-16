import React from "react";
import {
	Logo,
	SearchIcon,
	CartIcon,
	AccountIcon,
} from "../../../public/images/index";

function Navbar() {
	return (
		<div className="nav-container bg-white border-b-2">
		<div className="navbar flex justify-evenly container">
			<div className="logo">
				<Logo />
			</div>
			<div className="search-bar w-2/3 text-center">
				<input type="text" className="input-box" placeholder="Search...." />
			</div>
			<div className="nav-items flex">
				<CartIcon className="mr-8"/>
				<AccountIcon />
			</div>
		</div>
		</div>
		
	);
}

export default Navbar;
