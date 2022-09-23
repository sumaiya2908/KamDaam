import React, { useEffect } from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../store/product'


function Products() {
	const dispatch = useDispatch()

	const { productList } = useSelector((state) => state.product)
	const { loading, error } = useSelector((state) => state.state)

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	return (
		<div className='products mt-8 mx-10'>
			{productList.map((product, key) => {
				return (
					<Product product={product} key={key} />
				)
				
			})}
		</div>
	)
}

export default Products