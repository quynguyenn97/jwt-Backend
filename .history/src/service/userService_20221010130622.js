const hashPassword = () => {
    let hashPassword = bcrypt.hashSync(password, salt);
};
