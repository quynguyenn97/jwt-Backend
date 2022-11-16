import db from "../models";
const getGroupWithRoles = async (user) => {
    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        include: [{ model: db.Role }],
        raw: true,
        nest: true,
    });
};
module.exports = {
    getGroupWithRoles,
};
