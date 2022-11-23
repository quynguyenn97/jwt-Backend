import db from "../models";
const createNewRoles = async (roles) => {
    try {
        const testArr = [
            { url: "test1", description: "abc" },
            { url: "/user/update", description: "abc" },
        ];
        let currentRoles = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true,
        });
        const persists = testArr.filter(
            ({ url: url1 }) =>
                !currentRoles.some(({ url: url2 }) => url1 === url2)
        );
        if (persists.length === 0) {
            return {
                EM: "nothing to create",
                EC: 0,
                DT: [],
            };
        }
        await db.Role.bulkCreate(persists);
        return {
            EM: `Create roles cucceeds: ${persists.length} roles..`,
            EC: 0,
            DT: [],
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "user not exist",
            EC: 2,
            DT: data,
        };
    }
};
const getAllRoles = async () => {
    try {
        let data = await db.Role.findAll();
        return {
            EM: `Get all roles succeeds`,
            EC: 0,
            DT: data,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "user not exist",
            EC: 2,
            DT: data,
        };
    }
};
const deleteRole = async (id) => {
    try {
        let role = await db.Role.findOne({
            where: { id: id },
        });
        if (role) {
            await role.destroy();
        }
        return {
            EM: `Delete roles succeeds`,
            EC: 0,
            DT: data,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "err from server",
            EC: 2,
            DT: data,
        };
    }
};
module.exports = { createNewRoles, getAllRoles, deleteRole };
