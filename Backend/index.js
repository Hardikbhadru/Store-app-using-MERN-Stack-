const dotenv = require('dotenv');
const express = require('express');
const cors = require("cors"); // required cors to handle cors origin requires on our sever
const db = require('./database/index')

dotenv.config();
const PORT = process.env.PORT || 5000;

// to inite database
// @info: pass argument alter and force according requirement
// @example: { alter: true }
db.sequelize.sync({ alter: true })


// create express app
const app = express();

app.use(cors()); // cors middleware for cros origin requires

app.use(express.json()); // parse requests of content-type - application/json @info: {limit: '50mb'}


require('./routes/userRoute')(app);
require('./routes/productRoute')(app);


// @info: Error if Route not found
app.use((req, res) => {
    res.redirect("/error?code=404");
});

app.listen(PORT, () => {
    console.log(`APP LISTENING ON PORT ${PORT}`);
});