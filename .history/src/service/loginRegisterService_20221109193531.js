import db from "../models/index";
const checkEmailExist = async (email) => {
    let user = await db.User.findOne({
        where: { email: userEmail },
    });
    if (user) {
        return true;
    }
    return false;
};
const registerNewUser = async (rawUserData) => {
    //check email exist
};
module.exports = {
    registerNewUser,
};
