import db from "../models/index";
const getGroup = async () => {
    try {
        let data = await db.getGroup.findAll();

        return res.status(200).json({
            EM: "get Group succsess",
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

module.exports = { getGroup };
