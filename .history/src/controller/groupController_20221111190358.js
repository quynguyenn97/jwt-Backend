import db from "../models";
import groupService from "../service/groupService";
const readFunc = async (req, res) => {
    try {
        let data = await groupService.getGroups();
        return {
            EM: "get data succsess",
            EC: 0,
            DT: data,
        };
    } catch (e) {
        console.log(e);
        return {
            EM: "wrongs with services",
            EC: 1,
            DT: [],
        };
    }
};

module.exports = {
    readFunc,
};
