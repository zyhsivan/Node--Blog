const articleService = require("../../service/article.service");

class clientArticleRouter {
  async getAllArticle(ctx, next) {
    //数据库操作
    const result = await articleService.getRevseArticle();
    //返回数据
    ctx.body = result;
  }
  async getOneArticle(ctx, next) {
    const { id } = ctx.request.query;
    const result = await articleService.getOne(id);
    //返回数据
    ctx.body = result;
  }

  async getTypeArticle(ctx, next) {
    const { id } = ctx.request.query;
    const result = await articleService.getType(id);
    //返回数据
    ctx.body = result;
  }
}

module.exports = new clientArticleRouter();
