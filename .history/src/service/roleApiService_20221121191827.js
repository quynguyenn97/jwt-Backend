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
        const results = testArr.filter(
            ({ url: url1 }) =>
                !currentRoles.some(({ url: url2 }) => url1 === url2)
        );
        // await db.Role.bulkCreate(roles);
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
