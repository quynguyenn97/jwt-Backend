import db from "../models";
const createNewRoles = async (roles) => {
    try {
        await db.Role.bulkCreate(roles);
    } catch (error) {
        console.log(error);
        return {
            EM: "user not exist",
            EC: 2,
            DT: data,
        };
    }
};

module.exports = { createNewRoles };
