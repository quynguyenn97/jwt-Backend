import userService from "../service/userService";

const handleLogin = (req, res) => {
    return res.render("home.ejs");
};
const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    userService.createNewUser(email, password, username);
    return res.redirect("/user");
};

module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
};
