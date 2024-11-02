import React from 'react'
import ProductItem from './ProductItem'
// import { AnimatePresence, motion } from "framer-motion";

function ProductList({productList}) {
	return (
		<div className='grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden sm:mx-1 mx-4'>
			{productList.map(item=>(
				<ProductItem product={item} key={item.id} />
			))}
		</div>
	)
}

export default ProductList