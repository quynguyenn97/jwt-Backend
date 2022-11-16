import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let payload = { name: "Eric", address: "ha noi" };
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (err) {
        console.log(err);
    }
    return token;
};
const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let data = null;
    jwt.verify(token, key, function (err, decoded) {
        if (err) {
            console.log(err);
            return data;
        }
    });
    return decoded;
};
module.exports = { createJWT, verifyToken };
