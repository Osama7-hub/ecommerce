'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'
import { ArrowRight } from 'lucide-react'
import { ButtonGroup, Button } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';


function ProductSection() {
	const [productList, setProductList] = useState([])
	const [productCategory, setproductCategory] = useState([])

	const [activeIndex, setActiveIndex] = useState(0);

	const categories = ['All', 'Men', 'Women', 'Watches', 'Shoes', 'Accessories'];


	useEffect(() => {
		getLatestProducts_();
	}, [])

	const getLatestProducts_ = () => {
		ProductApis.getLatestProducts().then(res => {
			// console.log(res.data.data);
			setProductList(res.data.data)
		})
	}

	const handleCategory = (index) => {
		setActiveIndex(index);
		ProductApis.getProductsByCategory(categories[index]).then((res) => {
			// console.log(res?.data?.data);
			// categories[index] !== "All" ? setproductCategory(res.data.data) : setproductCategory([]);
			setproductCategory(res.data.data);
			// console.log(e.target.textContent);
		});
	};


	return (
		<div className='container mx-auto mt-24'>
			<div>
				<h1 className='text-5xl uppercase mx-4'>Product Overview</h1>
				<div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-5 my-5 items-baseline h-fit mx-4'>
					<ButtonGroup className='lg:flex-row flex-col justify-start z-40 mt-20 mb-14 col-span-4' size='sm'>
						{categories.map((item, index) => (
							<Button key={index} onClick={() => { handleCategory(index) }} className={`text-gray-500 hover:text-primary bg-transparent border-none outline-none shadow-none w-fit ${activeIndex === index ? 'text-primary' : ''}`}>{item}</Button>
						))}
					</ButtonGroup>
					<Link href='/shop' className='font-normal text-lg float-right text-primary opacity-80 hover:opacity-100 flex items-center cursor-pointer z-50'>
						View All Collection <ArrowRight className='h-4' />
					</Link>
				</div>
			</div>

			<div className=''>
				<AnimatePresence>
					{!productCategory.length ? <ProductList productList={productList} component={motion.section} /> : <ProductList productList={productCategory} component={motion.section} />}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default ProductSection