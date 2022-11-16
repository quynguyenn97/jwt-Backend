import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = (payload) => {
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
    try {
        let decoded = jwt.verify(token, key);
        data = decoded;
    } catch (err) {
        console.log(err);
    }
    return data;
};
const checkUserJWT = (req, res, next) => {
    let cookies = req.cookies;
    if (cookies && cookies.jwt) {
        console.log("my jwt", cookies.jwt);
    }
};
module.exports = {
    createJWT,
    verifyToken,
    checkUserJWT,
};
