import db from "../models";
const createNewRoles = async (roles) => {
    try {
        let currentRoles = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true,
        });
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
