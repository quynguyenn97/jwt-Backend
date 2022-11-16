import db from "../models";
import groupServive from "../service/groupService";
const readFunc = async (req, res) => {
    try {
        let data = await db.groupServive.getGroup();
        return res.status(200).json({
            EM: "get data succsess",
            EC: 0,
            DT: data,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "wrongs with services",
            EC: 1,
            DT: [],
        });
    }
};

module.exports = {
    readFunc,
};
