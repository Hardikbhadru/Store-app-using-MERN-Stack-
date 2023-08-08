//Database Connection Build
const Sequelize = require("sequelize");


// DB configuration 
const sequelize = new Sequelize('store-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});



//DB Connection
const db = { sequelize: sequelize };



//All Models Include
db.user = require("./models/userModel")(sequelize);
db.product = require("./models/productModel")(sequelize);
db.cart = require("./models/cartModel")(sequelize);




module.exports = db;