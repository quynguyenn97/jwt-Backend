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
    let decoded = null;
    try {
        decoded = jwt.verify(token, key);
    } catch (err) {
        console.log(err);
    }
    return decoded;
};
const checkUserJWT = (req, res, next) => {
    let cookies = req.cookies;
    if (cookies && cookies.jwt) {
        let token = cookies.jwt;
        let decoded = verifyToken(token);
        if (decoded) {
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: "",
                EM: "Not authenticated the user",
            });
        }
        console.log("my jwt", cookies.jwt);
    } else {
        return res.status(401).json({
            EC: -1,
            DT: "",
            EM: "Not authenticated the user",
        });
    }
};
module.exports = {
    createJWT,
    verifyToken,
    checkUserJWT,
};
