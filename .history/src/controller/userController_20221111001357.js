import userApiService from "../service/userApiService";
const readFunc = async (req, res) => {
    let users = await userApiService.getAllUser(req.body);
    try {
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: "-1",
            DT: "",
        });
    }
};
const createFunc = (req, res) => {
    try {
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: "-1",
            DT: "",
        });
    }
};
const updateFunc = (req, res) => {
    try {
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: "-1",
            DT: "",
        });
    }
};
const deleteFunc = (req, res) => {
    try {
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from sever",
            EC: "-1",
            DT: "",
        });
    }
};

module.exports = {
    readFunc,
    createFunc,
    updateFunc,
    deleteFunc,
};
