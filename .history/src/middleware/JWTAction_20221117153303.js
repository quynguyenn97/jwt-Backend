import jwt from "jsonwebtoken";
require("dotenv").config();
const nonSecurePaths = ["/", "/register", "/login"];

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
    if (nonSecurePaths.includes(req.path)) return next();
    let cookies = req.cookies;
    if (cookies && cookies.jwt) {
        let token = cookies.jwt;
        let decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: "",
                EM: "Not authenticated the user",
            });
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: "",
            EM: "Not authenticated the user",
        });
    }
};
const checkUserPermission = (req, res, next) => {
    if (nonSecurePaths.includes(req.path) || req.path === "/account")
        return next();
    if (req.user) {
        let email = req.user.email;
        let roles = req.user.groupWithRoles.Roles;
        let currentUrl = req.path;
        if (!roles || roles.length === 0) {
            return res.status(403).json({
                EC: -1,
                DT: "",
                EM: `you dont permission to access this resource...`,
            });
        }
        let canAccess = roles.some((item) => item.url === currentUrl);
        if (canAccess === true) {
            next();
        } else {
            return res.status(403).json({
                EC: -1,
                DT: "",
                EM: `you dont permission to access this resource...`,
            });
        }
    }
};
module.exports = {
    createJWT,
    verifyToken,
    checkUserJWT,
    checkUserPermission,
};
