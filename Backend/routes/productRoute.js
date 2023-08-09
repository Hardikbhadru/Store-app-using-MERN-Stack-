module.exports = (app) => {
	const express = require("express");
	const product = require("../controllers/products/product");
	let router = express.Router();

	// Login API Routes
	router.get("/list",product.productList)
	router.get("/get/:id", product.getProduct );
	router.post("/create",product.createProduct)

	app.use('/api/product', router);
};
