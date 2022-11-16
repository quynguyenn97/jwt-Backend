import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let payload = { name: "Eric", address: "ha noi" };
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
};

module.exports = { createJWT };
