const db = require("../../database/index");
const customError = require("../../helpers/customError")


exports.userLogin = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        let userResponse = await db.user.findOne({
            where: { email, is_active: "1" },
        });
        if (!userResponse) throw new customError(403, "User not found");
        if (userResponse.password !== password)
            throw new customError(403, "Password is incorrect");
        res.status(200).send({ data: userResponse, message: "Successfully logged in" });
    } catch (error) {
        next(error);
    }
};