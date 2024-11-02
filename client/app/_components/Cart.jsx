import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'
import Link from 'next/link'
import Image from 'next/image';

function Cart() {
	const { cart, setcart } = useContext(CartContext)

	return (
		<div>
			<ul className="space-y-4">
				{cart?.map((item) => (
					<li key={item?.id} className="flex items-center gap-4 border-t dark:border-gray-700 py-4">
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
				))}
			</ul>
			<div>	
			<Link
				href="/cart"
				className="uppercase block px-5 py-3 mx-auto w-full text-center text-sm font-bold text-white transition bg-primary rounded hover:shadow-lg bg-opacity-85 hover:bg-opacity-100"
			>
				View My Cart
			</Link>
			</div>
		</div>
	)
}

export default Cart