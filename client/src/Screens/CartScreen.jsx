import React from 'react'
import { useSelector } from 'react-redux';



function CartScreen() {

	const { cart } = useSelector((state) => state.cart)

	return (
		{ cart } ?
			<div>CartScreen</div>
			:
			<div> Cart is empty</div>
  )
}

export default CartScreen