const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("jwt", "username", null, {
    host: "localhost",
    dialect: "mysql",
});
