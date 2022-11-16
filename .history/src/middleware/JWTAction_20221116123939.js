import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let token = jwt.sign(
        { name: "Eric", address: "ha noi" },
        process.env.JWT_SECRET
    );
    return token;
};

module.exports = { createJWT };
