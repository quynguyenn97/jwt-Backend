import db from "../models/index";

const getAllUser = async () => {
    let data = {
        EM: "",
        EC: "",
        DT: "",
    };
    try {
        let users = db.User.findAll();
        if (users) {
            let data = users.get({ plain: true });
        } else {
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: "-1",
            DT: "",
        });
    }
};
const createNewUser = () => {};
const updateUser = () => {};
const deleteUSer = () => {};

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUSer,
};
