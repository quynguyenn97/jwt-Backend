import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();
/**
 *
 * @param {*} app: express app
 */
const initWebRoutes = (app) => {
    router.get("/", homeController.handleLogin);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-users", homeController.handleCreateNewUser);

    return app.use("/", router);
};
export default initWebRoutes;
