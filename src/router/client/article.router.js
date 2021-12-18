const Router = require("koa-router");
const {
  getAllArticle,
  getOneArticle,
  getTypeArticle,
} = require("../../controller/client/article.controller");

const clientArticleRouter = new Router({ prefix: "/client" });
//获得所有文章
clientArticleRouter.get("/allArticle", getAllArticle);
//根据id获取一篇文章
clientArticleRouter.get("/oneArticle", getOneArticle);
//获取某一类型的所有文章
clientArticleRouter.get("/typeArticle", getTypeArticle);
module.exports = clientArticleRouter;
