const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("jwt", "root", null, {
    host: "localhost",
    dialect: "mysql",
});
