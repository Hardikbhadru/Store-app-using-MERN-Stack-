module.exports = (app) => {
	const express = require("express");
	const login = require("../controllers/user/login");
	const registration = require("../controllers/user/registration")
	let router = express.Router();

	// Login API Routes
	router.post("/login", login.userLogin );
	router.post("/registration",registration.registration)

	app.use('/api/auth', router);
};
