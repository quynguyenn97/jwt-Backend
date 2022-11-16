import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import { getGroupWithRoles } from "./JWTService";

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
            phone: rawData.phone,
            groupId: 4,
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
            DT: "",
        };
    }
};

const checkPassword = (inputPassword, hashPassWord) => {
    return bcrypt.compareSync(inputPassword, hashPassWord);
};
const handleUserLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phone: rawData.valueLogin },
                ],
            },
        });
        if (user) {
            let isCorrectPassword = checkPassword(
                rawData.password,
                user.password
            );
            if (isCorrectPassword === true) {
                let roles = await getGroupWithRoles(user);
                return {
                    EM: "Ok",
                    EC: 0,
                    DT: { access_token: "", roles },
                };
            }
        }

        return {
            EM: "Your email/phone number or password is incorrect",
            EC: -2,
            DT: "",
        };
    } catch (e) {
        console.log(e);
        return {
            EM: "Something wrongs in server",
            EC: -2,
        };
    }
};
module.exports = {
    registerNewUser,
    handleUserLogin,
    checkPassword,
    hashUserPassword,
    checkEmailExist,
    checkPhoneExist,
};
