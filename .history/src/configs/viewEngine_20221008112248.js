import express from "express";

/**
 *
 * @param {*} app
 */
const configViewEngine = (app) => {
    app.use(express.static("./src/public"));
};
export default configViewEngine;
