const db = require("../../database/index");


exports.registration = async (req, res, next) => {
    try {
        let data = req.body;
        const user = await db.user.findOne({ where: { email: data.email } })
        if (user) return res.status(409).send({ message: "You already registered!" })
        const userResponse = await db.user.create({
            first_name: data.first_name,
            last_name: data.last_name,
            phone_no: data.phone_no,
            email: data.email,
            password: data.password,
            is_active: data.is_active,
            role: data.role
        });
        if (userResponse) {
            return res.status(200).send({ message: "User created successfully" });
        }
    } catch (error) {
        next(error);
    }
}