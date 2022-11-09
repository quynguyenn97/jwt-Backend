import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models";

// create the connection to database

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};
const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password);
    try {
        await db.User.create({
            username: username,
            email: email,
            password: hashPass,
        });
    } catch (error) {
        console.log("check error", error);
    }
};

const getUserList = async () => {
    let newUser = await db.User.findOne({
        where: { id: 1 },
        // include: db.Group,
        raw: true,
        nest: true,
    });
    console.log(">>>check new user", newUser);
    let users = [];
    users = await db.User.findAll();
    return users;
    // try {
    //     const [rows, fields] = await connection.execute("Select * from users ");
    //     return rows;
    // } catch (error) {
    //     console.log("check error", error);
    // }
};
const deleteUser = async (userId) => {
    await db.User.destroy({
        where: { id: userId },
    });
};
const getUserById = async (id) => {
    let user = {};
    user = await db.User.findOne({
        where: { id: id },
    });
    return user.get({ plain: true });
};

const updateUserInfo = async (email, username, id) => {
    await db.User.update(
        { email: email, username: username },
        {
            where: { id: id },
        }
    );
};
module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfo,
};
