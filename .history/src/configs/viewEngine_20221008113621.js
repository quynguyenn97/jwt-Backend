import { Express } from "express";

/**
 *
 * @param {*} app
 */
const configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("view", "./src/views");
};
export default configViewEngine;
