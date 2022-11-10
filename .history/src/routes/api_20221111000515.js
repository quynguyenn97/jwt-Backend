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
    //RestFulApi
    router.get("/user/read", userController.show);
    router.post("/user/create", userController.create);
    router.put("/user/update", userController.update);
    router.delete("/user/delete", userController.delete);

    return app.use("/api/v1", router);
};
export default initApiRoutes;
