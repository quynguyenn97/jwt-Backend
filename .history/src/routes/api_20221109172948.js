import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";

const router = express.Router();
/**
 *
 * @param {*} app: express app
 */
const initApiRoutes = (app) => {
    //GET
    router.get("/api/test-api", apiController.testApi);

    return app.use("/api", router);
};
export default initApiRoutes;
