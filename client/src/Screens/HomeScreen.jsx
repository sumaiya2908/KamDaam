import React from "react";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";

function HomeScreen() {
	return (
		<div className="HomeContainer bg-primary">
			<Navbar />
			<Products/>
		</div>
	);
}

export default HomeScreen;
