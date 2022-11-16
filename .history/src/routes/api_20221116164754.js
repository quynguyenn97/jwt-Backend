import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import { checkUserJWT } from "../middleware/JWTAction";

const router = express.Router();
/**
 *
 * @param {*} app: express app
 */
const checkUserLogin = (req, res, next) => {
    const nonSecurePaths = ["/", "/regooster", "/login"];
    if (nonSecurePaths.includes(req.path)) return next();
};
const initApiRoutes = (app) => {
    //GET
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);
    //RestFulApi
    router.get("/user/read", userController.readFunc);
    router.post("/user/create", userController.createFunc);
    router.put("/user/update", userController.updateFunc);
    router.delete("/user/delete", userController.deleteFunc);

    router.get("/group/read", groupController.readFunc);
    return app.use("/api/v1", router);
};
export default initApiRoutes;
