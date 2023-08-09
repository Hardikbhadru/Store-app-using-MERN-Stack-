const db = require("../../database/index");
const customError = require("../../helpers/customError")

exports.getProduct = async (req, res) => {
    const { product_id } = req.query;
    const productResponse = await db.user.findOne({ where: { product_id: product_id } })
    if (!productResponse) throw new customError(403, "User not found");
    else return res.status(200).json({ data: productResponse.dataValues })
}

exports.createProduct = async (req, res) => {
    try {
        let data = req.body;
        const productRes = await db.user.findOne({ where: { product_name: data.product_name } })
        if (productRes) return res.status(409).send({ message: "Same aalready exist" })
        const productResponse = await db.user.create({
            product_name: data.product_name,
            description: data.description,
            quantity: data.quantity,
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            image4: data.image4,
            image5: data.image5,
            created_by: 'admin',
            is_active: 1,
        });
        if (productResponse) {
            return res.status(200).send({ data: productResponse, message: "User created successfully" });
        }
    } catch (error) {
        next(error);
    }
}


exports.productList = async (req, res) => {
    try {
        const productResponse = await db.product.findAll();
        if (!productResponse) throw new customError(403, "User not found");
        else return res.status(200).json({ data: productResponse.dataValues })
    } catch (error) {
        next(error);
    }
}