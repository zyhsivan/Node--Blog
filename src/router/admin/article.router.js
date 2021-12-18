const Router = require("koa-router");
const { verifyAuth } = require("../../middleware/admin/auth.middleware");
const {
  getArticleType,
  postArticle,
  updateArticle,
  getArticle,
  deleteArticle,
  getOneArticle,
} = require("../../controller/admin/article.controller");
const adminArticleRouter = new Router({ prefix: "/admin" });
//获取所有文章的类型
adminArticleRouter.get("/articleType", verifyAuth, getArticleType);
//发布一篇文章
adminArticleRouter.post("/article", verifyAuth, postArticle);
//更新上一篇文章
adminArticleRouter.post("/updateArticle", verifyAuth, updateArticle);
//获取所有文章
adminArticleRouter.get("/getArticle", verifyAuth, getArticle);
//删除某一文章
adminArticleRouter.post("/oneArticle", verifyAuth, deleteArticle);
//获取某一id文章
adminArticleRouter.get("/oneArticle", verifyAuth, getOneArticle);
module.exports = adminArticleRouter;
