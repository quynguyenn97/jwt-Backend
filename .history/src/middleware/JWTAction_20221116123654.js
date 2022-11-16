import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = () => {
    let token = jwt.sign({ foo: "bar" }, process.env.JWT_SECRET);
    return token;
};

export default JWTAction;
