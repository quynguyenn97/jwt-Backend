import db from "../models/index";
const checkEmail = async (email) => {
    let user = await db.User.findOne({
        where: { email: userEmail },
    });
    if (user) {
        return true;
    }
};
const registerNewUser = async (rawUserData) => {
    //check email exist
};
module.exports = {
    registerNewUser,
};
