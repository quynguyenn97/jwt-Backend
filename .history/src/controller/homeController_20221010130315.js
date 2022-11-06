import mysql from "mysql2";

import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
});
const handleLogin = (req, res) => {
    return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
    return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    let hashPassword = bcrypt.hashSync("B4c0//", salt);

    connection.query(
        "INSERT INTO users(email, password, username) VALUES (?,?,?)",
        [email, password, username],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
        }
    );
    return res.send("handlke");
};

module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
};
