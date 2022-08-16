import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";

function HomeScreen() {
	return (
		<div className="HomeContainer bg-primary">
			<Navbar />
			<Products/>
		</div>
	);
}

export default HomeScreen;
