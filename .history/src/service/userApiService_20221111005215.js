import db from "../models/index";

const getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            include: {
                model: db.Group,
                attributes: ["name", "description"],
            },
        });
        if (users) {
            return {
                EM: "get data succsess",
                EC: "0",
                DT: users,
            };
        } else {
            return {
                EM: "get data succsess",
                EC: "0",
                DT: [],
            };
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "wrongs with services",
            EC: 1,
            DT: [],
        });
    }
};
const createNewUser = async (data) => {
    try {
        await db.User.create;
    } catch (e) {}
};
const updateUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id },
        });
        if (user) {
            //update
        } else {
            //not found
        }
    } catch (e) {}
};
const deleteUSer = async (id) => {
    try {
        users = await db.User.findAll;
    } catch (e) {}
};

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUSer,
};
