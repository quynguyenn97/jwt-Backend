import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";

const router = express.Router();
/**
 *
 * @param {*} app: express app
 */
const initApiRoutes = (app) => {
    //GET
    router.get("/test-api", apiController.testApi);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    router.get("/test-api", apiController.testApi);

    return app.use("/api/v1", router);
};
export default initApiRoutes;
