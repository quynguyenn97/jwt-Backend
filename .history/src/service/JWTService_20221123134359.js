import db from "../models/index";
const getGroupWithRoles = async (user) => {
    console.log(user);
    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        attributes: ["id", "name", "description"],
        include: {
            model: db.Role,
            attributes: ["id", "url", "description"],
            through: { attributes: [] },
        },
    });
    console.log("role getGroup", roles);
    return roles ? roles : {};
};
module.exports = {
    getGroupWithRoles,
};
