const { default: axiosClient } = require("./axiosClient");

const getAllLatestProducts = ()=>axiosClient.get('/products?sort[0]=id:desc&populate=*')
const getLatestProducts = ()=>axiosClient.get('/products?populate=*&pagination[page]=1&pagination[pageSize]=8')
const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`)

const getProductsByCategory = (category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
export default {
	getAllLatestProducts,
	getLatestProducts,
	getProductById,
	getProductsByCategory,
}