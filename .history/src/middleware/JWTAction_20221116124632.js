import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let payload = { name: "Eric", address: "ha noi" };
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (err) {
        console.log(err)
    }
    return token;
};
const verifyToken = (token) = > {
    
}
module.exports = { createJWT };
