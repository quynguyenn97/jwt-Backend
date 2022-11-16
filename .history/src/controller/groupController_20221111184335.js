const readFunc = (req, res) => {
    try {
        return {
            EM: "get data succsess",
            EC: 0,
            DT: data,
        };
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "wrongs with services",
            EC: 1,
            DT: [],
        });
    }
};

module.exports = {
    readFunc,
};
