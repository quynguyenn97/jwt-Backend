"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "User",
            [
                {
                    email: "John Doe12",
                    password: "",
                    username: "",
                },
                {
                    email: "John Doe2",
                    password: "",
                    username: "",
                },
                {
                    email: "John Doe3",
                    password: "",
                    username: "",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
