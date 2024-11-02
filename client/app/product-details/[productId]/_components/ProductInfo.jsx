'use client'
import React, { useContext, useState } from 'react'
import { ShoppingCart, BadgeCheck, AlertOctagon, ThumbsUp, Check } from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_utils/CartApis'
import { CartContext } from '../../../_context/CartContext'
import { Radio, RadioGroup } from '@headlessui/react'
import { Rating } from "@material-tailwind/react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";

function ProductInfo({ product }) {
	const { user } = useUser();
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const { cart, setCart } = useContext(CartContext)
	const handleAddToCart = () => {
		if (!user) {
			router.push('/sign-in')
		} else {
			/*logic to add to cart*/
			const data = {
				data: {
					username: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					products: [product?.id]
				}
			}
			CartApis.addToCart(data).then(res => {
				console.log('cart created successfully', res.data.data)
				setCart(oldCart => [
					...oldCart,
					{
						id: res?.data?.data?.id,
						product
					}
				])
			}).catch(error => {
				console.log('error', error)
			})
		}
	}

	const handleClick = () => {
		handleAddToCart();
		handleOpen();
	}
	return (
		<div>
			{product?.id ?
				<div class="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<h2 className="text-sm title-font tracking-widest">{product?.attributes?.category}</h2>
					<h1 className="text-gray-900 dark:text-gray-200 text-3xl title-font font-medium mb-1">{product?.attributes?.title}</h1>
					<div className="flex mb-4">
						<span className="flex items-center">
							<Rating value={4} readonly />
							<span classNameName="text-gray-600 ml-3">4 Reviews</span>
						</span>

						<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
							<a className="text-gray-500">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a className="text-gray-500">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a className="text-gray-500">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
									<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
						</span>
					</div>

					<p className="leading-relaxed">{product?.attributes?.description}</p>

					<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
						<div className="flex">
							<span className="mr-3">Color</span>
							<button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
							<button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
							<button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
						</div>

						<div className="flex ml-6 items-center">
							<span className="mr-3">Size</span>
							<div className="relative">
								<select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base pl-3 pr-10">
									<option>SM</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
								<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
										<path d="M6 9l6 6 6-6"></path>
									</svg>
								</span>
							</div>
						</div>
					</div>

					<div className="flex">
						<span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-300">$ {product?.attributes?.price}</span>
						<button onClick={handleClick} variant="gradient" className='flex ml-auto text-white border-0 py-2 px-6 focus:outline-none bg-primary opacity-80 hover:opacity-100 rounded gap-2'><ShoppingCart /> Add To Cart</button>
					</div>

					<Dialog open={open} handler={handleOpen} size='xs' className='text-center p-5'>
						<DialogHeader className='flex justify-center items-center'><Check className='border-2 w-[100px] h-[100px] p-5 rounded-full text-green-300' /></DialogHeader>
						<DialogBody>
							<h2 className='text-xl font-bold text-gray-900'>{product?.attributes?.title}</h2>
							<p>Is Added To Cart !</p>
						</DialogBody>
						<DialogFooter>
							<Button onClick={handleOpen} className='!bg-primary text-sm'>
								<span>OK</span>
							</Button>
						</DialogFooter>
					</Dialog>
				</div >
				:
				<SkeletonProductInfo />
			}

		</div >
	)
}

export default ProductInfo