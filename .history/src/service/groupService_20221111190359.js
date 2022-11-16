import db from "../models/index";
const getGroups = async () => {
    try {
        let data = await db.Group.findAll();
        console.log(data);
        return {
            EM: "get Group succsess",
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

module.exports = { getGroups };
