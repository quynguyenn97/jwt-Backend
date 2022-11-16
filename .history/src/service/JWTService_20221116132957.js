import db from "../models";
const getGroupWithRoles = async (user) => {
    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        include: [{ model: db.Role, attributes: ["id", "url", "description"] }],
    });
    return roles ? roles : {};
};
module.exports = {
    getGroupWithRoles,
};
