import db from "../models/index";

const getAllUser = () => {
    let data = {
        EM: "",
        EC: "",
        DT: "",
    };
    try {
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
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
