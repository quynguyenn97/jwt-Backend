import userService from "../service/userService";

const handleLogin = (req, res) => {
    return res.render("home.ejs");
};
const handleUserPage = async (req, res) => {
    // Cookies that have not been signed
    console.log("Cookies: ", req.cookies);
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
};

const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    await userService.createNewUser(email, password, username);
    return res.redirect("/user");
};
const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
};
const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    userData = user;
    return res.render("user-update.ejs", { userData });
};
const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;
    await userService.updateUserInfo(email, username, id);
    return res.redirect("/user");
};
module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser,
};
