import userApiService from "../service/userApiService";
import roleApiService from "../service/roleApiService";

const readFunc = async (req, res) => {
    try {
        let data = await roleApiService.getAllRoles();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: -1,
            DT: "",
        });
    }
};

const createFunc = async (req, res) => {
    try {
        let data = await roleApiService.createNewRoles(req.body);
        console.log("check data", data);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: -1,
            DT: "",
        });
    }
};
const updateFunc = async (req, res) => {
    try {
        let data = await userApiService.updateUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: -1,
            DT: "",
        });
    }
};
const deleteFunc = async (req, res) => {
    try {
        // console.log("check req", req.body.id);
        let data = await roleApiService.deleteRole(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: -1,
            DT: "",
        });
    }
};
const getUserAccount = async (req, res) => {
    return res.status(200).json({
        EM: "ok",
        EC: 0,
        DT: {
            access_token: req.token,
            groupWithRoles: req.user.groupWithRoles,
            email: req.user.email,
            username: req.user.username,
        },
    });
};
module.exports = {
    readFunc,
    createFunc,
    updateFunc,
    deleteFunc,
    getUserAccount,
};
