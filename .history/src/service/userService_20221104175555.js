import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
});

// create the connection to database

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};
const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);
    console.log(hashPass);
    connection.query(
        "INSERT INTO users (email, password, username) VALUES (?,?,?)",
        [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    );
};
const getUserList = async () => {
    let users = [];
    // connection.query("Select * from users", function (err, results, fields) {
    //     if (err) {
    //         console.log(err);
    //         return users;
    //     }
    //     users = results;
    //     console.log("check user,users", users);
    // });
    try {
        const [rows, fields] = await connection.execute("Select * from users ");
        return rows;
    } catch (error) {
        console.log("check error", error);
    }
};
module.exports = {
    createNewUser,
    getUserList,
};