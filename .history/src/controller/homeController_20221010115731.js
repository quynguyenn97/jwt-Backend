const handleLogin = (req, res) => {
    return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
    return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
    return res.send("user.ejs");
};

module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
};
