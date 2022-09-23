import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/product';

function ProductList() {
    const { ProductList } = useSelector((state) => state.product);
    const disptach = useDispatch()

    useEffect(() => {
        disptach(getProducts())
    }, [ProductList])

    console.log(ProductList)

    return (
        <div>ProductList</div>
    )
}

export default ProductList