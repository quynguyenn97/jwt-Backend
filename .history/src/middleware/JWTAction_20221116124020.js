import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let payload = { name: "Eric", address: "ha noi" };
    let key = process.env.JWT_SECRET;
    let token = jwt.sign(payload, key);
    return token;
};

module.exports = { createJWT };
