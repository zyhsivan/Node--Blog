const Router = require("koa-router");

const { login, success } = require("../../controller/admin/auth.controller");
const {
  verifyLogin,
  verifyAuth,
} = require("../../middleware/admin/auth.middleware");

const adminAuthRouter = new Router({ prefix: "/admin" });
adminAuthRouter.post("/login", verifyLogin, login);
adminAuthRouter.get("/test", verifyAuth, success);

module.exports = adminAuthRouter;
