import userApiService from "../service/userApiService";
const readFunc = async (req, res) => {
    let users = await userApiService.getAllUser(req.body);
};
const createFunc = (req, res) => {};
const updateFunc = (req, res) => {};
const deleteFunc = (req, res) => {};

module.exports = {
    readFunc,
    createFunc,
    updateFunc,
    deleteFunc,
};
