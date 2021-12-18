const Koa = require("koa");
const bodyPareser = require("koa-bodyparser");
const errorHandler = require("./error-handle");
const clientArticleRouter = require("../router/client/article.router");
const adminUserRouter = require("../router/admin/user.router");
const adminAuthRouter = require("../router/admin/auth.router");
const adminArticleRouter = require("../router/admin/article.router");
const app = new Koa();

//解决跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});
//解析body
app.use(bodyPareser());

//绑定路由
//前台
app.use(clientArticleRouter.routes());
app.use(clientArticleRouter.allowedMethods());

//后台
//后台注册路由
app.use(adminUserRouter.routes());
app.use(adminUserRouter.allowedMethods());
//后台登陆路由
app.use(adminAuthRouter.routes());
app.use(adminAuthRouter.allowedMethods());

app.use(adminArticleRouter.routes());
app.use(adminArticleRouter.allowedMethods());

app.on("error", errorHandler);
module.exports = app;
