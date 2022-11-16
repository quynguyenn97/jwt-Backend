import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let payload = { name: "Eric", address: "ha noi" };
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key);
        // console.log(token);
    } catch (err) {
        console.log(err);
    }
    return token;
};
const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let data = null;
    try {
        let decoded = jwt.verify(token, key);
        data = decoded;
    } catch (err) {
        console.log(err);
    }
    return data;
};
module.exports = { createJWT, verifyToken };
