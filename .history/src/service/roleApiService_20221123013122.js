import db from "../models/index";
const createNewRoles = async (roles) => {
    try {
        console.log(roles);
        // const testArr = [
        //     { url: "test1", description: "abc" },
        //     { url: "/user/update", description: "abc" },
        // ];
        let currentRoles = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true,
        });
        const persists = roles.filter(
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
            EM: `Create roles succeeds: ${persists.length} roles..`,
            EC: 0,
            DT: [],
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "something worng with server",
            EC: 2,
            DT: data,
        };
    }
};
const getAllRoles = async () => {
    try {
        let data = await db.Role.findAll({
            order: [["id", "DESC"]],
        });
        return {
            EM: `Get all roles succeeds`,
            EC: 0,
            DT: data,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "something worng with server",
            EC: 2,
            DT: [],
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
            DT: [],
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "err from server",
            EC: 1,
            DT: [],
        };
    }
};
const getRoleByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: `Not found any roles`,
                EC: 0,
                DT: [],
            };
        }
        let roles = await db.Group.findOne({
            where: { id: id },
            attributes: ["id", "name", "description"],
            include: {
                model: db.Role,
                attributes: ["id", "url", "description"],
                through: { attributes: [] },
            },
        });
        return {
            EM: `Get Role By Group succeeds`,
            EC: 0,
            DT: roles,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "err from server",
            EC: 1,
            DT: [],
        };
    }
};
const assignRoleToGroup = async (data) => {
    try {
        return {
            EM: `Get Role By Group succeeds`,
            EC: 0,
            DT: roles,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "err from server",
            EC: 1,
            DT: [],
        };
    }
};
module.exports = {
    createNewRoles,
    getAllRoles,
    deleteRole,
    getRoleByGroup,
    assignRoleToGroup,
};
