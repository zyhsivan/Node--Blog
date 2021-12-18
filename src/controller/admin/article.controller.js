const articleService = require("../../service/article.service");

class adminArticleController {
  async getArticleType(ctx, next) {
    const result = await articleService.getArticleType();
    ctx.body = result;
  }
  async postArticle(ctx, next) {
    const { type_id, title, article_content, introduce, addTime } =
      ctx.request.body;
    console.log("服务器接受成功,传给数据库", ctx.request.body);
    const result = await articleService.postArticle(
      type_id,
      title,
      article_content,
      introduce,
      addTime
    );
    console.log(result);
    ctx.body = result;
  }
  async updateArticle(ctx, next) {
    const { type_id, title, article_content, introduce, addTime } =
      ctx.request.body;
    console.log(ctx.request.body);
    const result = await articleService.updateArticle(
      type_id,
      title,
      article_content,
      introduce,
      addTime
    );
    console.log(result);
    ctx.body = result;
  }
  async getArticle(ctx, next) {
    const result = await articleService.getArticle();
    ctx.body = result;
  }
  async deleteArticle(ctx, next) {
    const { id } = ctx.request.body;
    console.log(id);
    const result = await articleService.removeArticle(id);
    ctx.body = result;
  }
  async getOneArticle(ctx, next) {
    const { id } = ctx.request.query;
    const result = await articleService.create(id);
    ctx.body = result;
  }
}

module.exports = new adminArticleController();
