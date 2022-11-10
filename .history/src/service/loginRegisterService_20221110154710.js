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
    try {
        //check email exist
        let isEmailExist = await checkEmailExist(rawUserData.email);
        if (isEmailExist === true) {
            return {
                EM: "The email is already exist",
                EC: 1,
            };
        }
        let isPhoneExist = await checkPhoneExist(rawUserData.phone);
        if (isPhoneExist === true) {
            return {
                EM: "The phonenumber is already exist",
                EC: 1,
            };
        }
        //hash password
        let hashPassWord = hashUserPassword(rawUserData.password);
        //create new user
        await db.User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            password: hashPassWord,
        });
        return {
            EM: "A user is created successfully",
            EC: 0,
        };
    } catch (e) {
        console.log(e);
        return {
            EM: "Something wrongs",
            EC: -2,
        };
    }
};

const checkPassword = (inputPassword, hashPassWord) => {
    return bcrypt.compareSync("B4c0//", hash);
};

module.exports = {
    registerNewUser,
};
