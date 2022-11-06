import mysql from "mysql2";

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

    connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
    return res.send("handlke");
};

module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
};
