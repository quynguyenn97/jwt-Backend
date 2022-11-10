import db from "../models/index";

const getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            include: {
                model: db.Group,
                attributes: ["name", "description"],
                nest: true,
            },
        });
        if (users) {
            // let data = users.get({ plain: true });
            console.log(">>check user", users);
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
const createNewUser = () => {};
const updateUser = () => {};
const deleteUSer = () => {};

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUSer,
};