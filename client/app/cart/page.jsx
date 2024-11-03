'use client'
import React, { useContext, useState } from 'react'
import { CartContext } from '../_context/CartContext'
import CartApis from '../_utils/CartApis'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Trash2, Check } from 'lucide-react'
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";

function Cart() {
	const router = useRouter();
	const { cart, setCart } = useContext(CartContext)

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const getTotalAmount = () => {
		let totalAmount = 0;
		cart.forEach(item => {
			totalAmount = totalAmount + Number(item?.product?.attributes?.price)
		})
		return totalAmount
	}
	const deleteCartItemFromList = (id) => {
		CartApis.deleteCartItem(id).then((res) => {
			if (res) setCart((oldCart) => oldCart.filter(item => item.id !== res?.data?.data?.id))
		}).catch(error => {
			console.log('error', error)
		})
	}

	const handleClick = (i) => {
		handleOpen();
		deleteCartItemFromList(i);
	}

	return (
		// <section className='border-2'>
		<div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 border-2 dark:border-gray-700 my-10 mt-28">
			<div className="max-w-3xl mx-auto">
				<header className="text-center">
					<h1 className="text-xl font-bold text-primary sm:text-3xl">Your Cart</h1>
				</header>

				<div className="mt-8">
					<ul className="space-y-4">
						{cart?.map((item) => (
							<div className='flex items-center w-full' key={item?.id}>
								<li className="flex items-center gap-4 border-t-2 dark:border-gray-700 py-4 w-full">
									<Image
										src={item?.product?.attributes?.banner?.data[0]?.attributes?.url}
										alt="Product-cart-details"
										className="object-cover w-20 h-24"
										width={100}
										height={100}
									/>

									<div>
										<h3 className="text-md text-black dark:text-gray-400 line-clamp-1 font-normal">{item?.product?.attributes?.title}</h3>
										<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
											<div>
												{/* <dt className="inline">Category:</dt> */}
												<dd className="inline text-[1.0rem]">{item?.product?.attributes?.category}</dd>
											</div>

											<div>
												{/* <dt className="inline">Price:</dt> */}
												<dd className="inline text-primary text-[15px]">{item?.product?.attributes?.price + " $"}</dd>
											</div>
										</dl>
									</div>

								</li>
								{/* <button onClick={() => deleteCartItemFromList(item?.id)} className="text-lg text-gray-600 transition hover:text-red-600"> */}
								<button onClick={() => handleClick(item?.id)} className="text-lg text-gray-600 transition hover:text-red-600">
									<span className="sr-only">Remove item</span>
									<Trash2 />
								</button>

								<Dialog open={open} handler={handleOpen} size='xs' className='text-center p-5'>
									<DialogHeader className='flex justify-center items-center'><Check className='border-2 w-[100px] h-[100px] p-5 rounded-full text-green-300' /></DialogHeader>
									<DialogBody>
										<h2 className='text-xl font-bold text-gray-900'>Deleted!</h2>
										<p>{item?.product?.attributes?.title} Has Been Deleted From Your Cart.</p>
									</DialogBody>
									<DialogFooter>
										<Button onClick={handleOpen} className='!bg-primary text-sm'>
											<span>OK</span>
										</Button>
									</DialogFooter>
								</Dialog>
							</div>
						))}
					</ul>

					<div className="pt-8 mt-8 border-t dark:border-gray-700">
						<div className="w-screen max-w-full space-y-4">
							<dl className="space-y-0.5 text-sm text-gray-700">
								<div className="flex justify-between !text-base font-medium">
									<dt className='text-black dark:text-gray-400 text-lg'>Total</dt>
									<dd className='text-primary'>${getTotalAmount()}</dd>
								</div>
							</dl>

							<div className="flex items-center">
								<button
									onClick={() => router.push(`/checkout?amount=${getTotalAmount()}`)}
									className="block w-full px-5 py-3 text-lg text-white transition-all bg-primary rounded hover:shadow-lg hover:px-6"
								>
									Checkout
								</button>
							</div>
							<h2 className='text-black dark:text-gray-400 text-[16px]'>Note: All Items will be sent via Email</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		// </section>
	)
}

export default Cart