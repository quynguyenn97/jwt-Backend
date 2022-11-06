import express from "express";
import { handleLogin } from "../controller/homeController";
import homeController from "../controller/homeController";

const router = express.Router();
/**
 *
 * @param {*} app: express app
 */
const initWebRoutes = (app) => {
    router.get("/", homeController.handleLogin);
    router.get("/", homeController.handleUserPage);
    return app.use("/", router);
};
export default initWebRoutes;