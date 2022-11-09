import express from "express";
import apiController from "../controller/apiController";

const router = express.Router();
/**
 *
 * @param {*} app: express app
 */
const initApiRoutes = (app) => {
    //GET
    router.get("/test-api", apiController.testApi);

    return app.use("/api/v1", router);
};
export default initApiRoutes;
