import db from "../models/index";
import {
    checkEmailExist,
    checkPhoneExist,
    hashUserPassword,
} from "./loginRegisterService";
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
            attributes: ["id", "username", "email", "phone", "sex", "address"],
            include: {
                model: db.Group,
                attributes: ["name", "description", "id"],
            },
            order: [["id", "DESC"]],
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
        let isEmailExist = await checkEmailExist(data.email);
        if (isEmailExist === true) {
            return {
                EM: "The email is already exist",
                EC: 1,
                DT: "email",
            };
        }
        let isPhoneExist = await checkPhoneExist(data.phone);
        if (isPhoneExist === true) {
            return {
                EM: "The phonenumber is already exist",
                EC: 1,
                DT: "phone",
            };
        }
        let hashPassWord = hashUserPassword(data.password);
        await db.User.create({ ...data, password: hashPassWord });
        return {
            EM: "create ok",
            EC: 0,
            DT: [],
        };
    } catch (e) {
        console.log(e);
        return {
            EM: "somwthing wrong with server",
            EC: 0,
            DT: [],
        };
    }
};
const updateUser = async (data) => {
    try {
        if (!data.groupId) {
            return {
                EM: "error with empty GriupId",
                EC: 1,
                DT: "group",
            };
        }
        let user = await db.User.findOne({
            where: { id: data.id },
        });
        if (user) {
            //update
            await user.update({
                username: data.username,
                address: data.address,
                sex: data.sex,
                groupId: data.groupId,
            });
            return {
                EM: "Update User succeds",
                EC: 0,
                DT: "",
            };
        } else {
            //not found
            return {
                EM: "User not found",
                EC: 2,
                DT: "",
            };
        }
    } catch (e) {
        console.log(e);
        return {
            EM: "something worng with service",
            EC: 1,
            DT: "",
        };
    }
};
const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id },
        });
        if (user) {
            let data = await user.destroy();
            return {
                EM: "Delete user success",
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: "user not exist",
                EC: 2,
                DT: data,
            };
        }
    } catch (e) {
        console.log(e);
        return {
            EM: "err from service",
            EC: 1,
            DT: data,
        };
    }
};

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
    getUserWithPagination,
};
