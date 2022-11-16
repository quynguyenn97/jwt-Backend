import db from "../models";
const getGroupWithRoles = async (user) => {
    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        include: [{ model: db.Role }],
    });
    console.log(roles);
};
module.exports = {
    getGroupWithRoles,
};
