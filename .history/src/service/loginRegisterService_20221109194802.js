import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail },
    });
    if (user) {
        return true;
    }
    return false;
};
const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phone: userPhone },
    });
    if (user) {
        return true;
    }
    return false;
};
const registerNewUser = async (rawUserData) => {
    //check email exist
    let isEmailExist = checkEmailExist(rawUserData.email);
    if (isEmailExist === true) {
        return {
            EM: "The email is already exist",
            EC: 1,
        };
    }
    let isPhoneExist = checkPhoneExist(rawUserData.phone);
    if (isPhoneExist === true) {
        return {
            EM: "The phonenumber is already exist",
            EC: 1,
        };
    }
    let hashPassWord = hashUserPassword(rawUserData.password);
};
module.exports = {
    registerNewUser,
};
