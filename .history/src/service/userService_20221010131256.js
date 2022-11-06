import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
const hashUserPassword = () => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};
const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);
};
