const Router = require("koa-router");
const { create } = require("../../controller/admin/user.controller");
const {
  verifyUser,
  handlePassword,
} = require("../../middleware/admin/user.middleware");

const adminUserRouter = new Router({ prefix: "/admin/user" });
adminUserRouter.post("/", verifyUser, handlePassword, create);
console.log("路由设置成功");
module.exports = adminUserRouter;
