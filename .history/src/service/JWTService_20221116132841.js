import db from "../models";
const getGroupWithRoles = async (user) => {
    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        include: [{ model: db.Role }],
    });
    return roles ? roles : {};
};
module.exports = {
    getGroupWithRoles,
};
