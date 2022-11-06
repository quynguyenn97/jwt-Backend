const handleLogin = (req, res) => {
    return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
    return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
    console.log("?>>> check", req.body);
    return res.send("handlke");
};

module.exports = {
    handleLogin,
    handleUserPage,
    handleCreateNewUser,
};
