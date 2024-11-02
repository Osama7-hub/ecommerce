import React from 'react'
import Image from 'next/image'
import { Eye, List, ShoppingCart, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { IconButton } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";

function ProductItem({ product }) {
	return (
		<motion.div
			initial={{ transform: "scale(0)" }}
			animate={{ transform: "scale(1)" }}
			transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
		>
			<Link href={`/product-details/${product?.id}`} className="group block overflow-hidden transition-all border-[1px] p-[5px]">
				<div className="relative h-[350px] sm:h-[450px]">
					<div className='overflow-hidden'>
						<Image src={product?.attributes?.banner?.data[0]?.attributes?.url}
							alt='banner-card'
							width={400}
							height={350}
							className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 hover:scale-110 duration-500"
						/>

						<Image src={product?.attributes?.banner?.data[1]?.attributes?.url}
							alt='banner-card'
							width={400}
							height={350}
							className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 hover:scale-110 duration-500"
						/>
					</div>
				</div>

				<div className="relative bg-white dark:bg-bgDark pt-3 ps-1">
					<Typography className="font-medium text-[#999]">{product?.attributes?.title}</Typography>
					<Typography className="font-medium text-primary">{product?.attributes?.price + "$"}</Typography>
				</div>
			</Link>
		</motion.div>
	)
}

export default ProductItem