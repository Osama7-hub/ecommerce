"use client";
import ProductApis from "../../_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";
import BreadCrumb from "../../_components/BreadCrumb";

function ProductDetails({ params }) {
	const path = usePathname();
	const [productDetails, setProductDetails] = useState({});
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		getProductById_();
	}, [params?.productId]);

	const getProductById_ = () => {
		ProductApis.getProductById(params?.productId).then((res) => {
			// console.log("product item ", res.data.data);
			setProductDetails(res.data.data);
			getProductListByCategory(res.data.data);
		});
	};

	const getProductListByCategory = (product) => {
		ProductApis.getProductsByCategory(product?.attributes.category).then(
			(res) => {
				// console.log(res?.data?.data);
				setProductList(res?.data?.data);
			}
		);
	};
	return (
		<section className="text-gray-600 dark:text-gray-200 body-font overflow-hidden">
			<div className="container mx-auto py-24">
				<BreadCrumb path={path} />
				<div class="grid lg:grid-cols-2 gap-3 mt-10 sm:gap-0 sm:grid-cols-1 mx-4">
					<ProductBanner product={productDetails} />
					<ProductInfo product={productDetails} />
				</div>

				<div className="border-t-2 mt-28 mb-8">
					<h2 className="mt-6 mb-10 text-2xl text-black dark:text-gray-200 uppercase mx-4">Similar Products</h2>
					<ProductList productList={productList} />
				</div>
			</div>
		</section>
	);
}

export default ProductDetails;
