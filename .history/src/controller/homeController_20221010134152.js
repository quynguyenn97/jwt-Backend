import userService from "../service/userService";
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
    console.log(password);
    userService.createNewUser(email, password, username);
    return res.send("handlke");
};

module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
};