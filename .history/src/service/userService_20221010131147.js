import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
const hashPassword = () => {
    let hashPassword = bcrypt.hashSync(password, salt);
};
