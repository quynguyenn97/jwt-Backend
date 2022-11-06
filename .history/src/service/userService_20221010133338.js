import bcrypt from "bcryptjs";
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
});
const salt = bcrypt.genSaltSync(10);
const hashUserPassword = () => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};
const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);
    connection.query(
        "INSERT INTO users(email, password, username) VALUES (?,?,?)",
        [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    );
};
const getUserList = () => {
    connection.query(
        "Select * from users",

        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    );
};
module.exports = {
    createNewUser,
};
