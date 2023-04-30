const express = require("express");
const { create, find, update, remove } = require("../controller/controller");
const { homeRouter, addUser, updateUser } = require("../services/render");
const route = express.Router();

/**
 * @description Root Route
 * @method GET
 */
route.get("/", homeRouter);
/**
 * @description Add User
 * @method GET
 */
route.get("/add_user", addUser);
/**
 * @description Update User
 * @method GET
 */
route.get("/update_user", updateUser);

// API
route.post("/api/users", create);
route.get("/api/users", find);
route.put("/api/users/:id", update);
route.delete("/api/users/:id", remove);

module.exports = route;
