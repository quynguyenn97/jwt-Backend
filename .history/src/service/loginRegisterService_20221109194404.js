import { raw } from "body-parser";
import db from "../models/index";
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
    let isPhoneExist = checkPhoneExist(rawUserData.phone);
};
module.exports = {
    registerNewUser,
};
