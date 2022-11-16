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
                EC: 0,
                DT: users,
            };
        } else {
            return {
                EM: "get data succsess",
                EC: 0,
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

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "username", "email", "phone", "sex"],
            include: {
                model: db.Group,
                attributes: ["name", "description"],
            },
        });
        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows,
        };
        return {
            EM: "get data succsess",
            EC: 0,
            DT: data,
        };
    } catch (e) {}
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
            user.save();
        } else {
            //not found
        }
    } catch (e) {}
};
const deleteUSer = async (id) => {
    try {
        await db.User.findOne({
            where: { id: id },
        });
        if (user) {
            
        } else {
            return {
                EM: "get data succsess",
                EC: 0,
                DT: data,
            };
        }
    } catch (e) {
        return {
            console.log(e)
            EM: "get data succsess",
            EC: 0,
            DT: data,
        };
    }
};

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUSer,
    getUserWithPagination,
};
