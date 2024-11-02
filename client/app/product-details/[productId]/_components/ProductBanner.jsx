"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { ButtonGroup } from '@material-tailwind/react';

function ProductBanner({ product }) {
	const [selectedImg, setselectedImg] = useState(0);
	return (
		<div>
			{
				product?.attributes?.banner?.data[0]?.attributes?.url ?
					<div className="grid gap-4">
						<div className='w-[75%]'>
							<Image
								src={product?.attributes?.banner?.data[selectedImg]?.attributes?.url}
								alt='product-details-banner'
								width={400}
								height={400}
								className='w-full lg:h-[100%] h-64 object-cover object-center rounded'
							/>
						</div>
						<div className="grid grid-cols-4 gap-2">
							{product?.attributes?.banner?.data.map((item, index) => {
								return (
									<Image
										onClick={() => { setselectedImg(index) }}
										key={item.id} value={index}
										src={item.attributes?.url}
										alt='product-details-banner'
										width={400}
										height={400}
										className={`h-[80px] lg:h-[100px] object-cover object-center rounded cursor-pointer`}
									/>
								);
							})}
						</div>
					</div>
					: <div className='w-[400px] h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
			}
		</div>
	)
}

export default ProductBanner