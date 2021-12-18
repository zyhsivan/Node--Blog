const connection = require("../app/database");

class ArticleService {
  //获取某一id文章
  async getOne(articleId) {
    const statement = `SELECT * FROM article WHERE id =? `;
    const result = await connection.execute(statement, [articleId]);
    return result[0];
  }
  //获取所有文章的类型
  async getArticleType() {
    const statement = `SELECT * FROM type`;
    const result = await connection.execute(statement);
    return result[0];
  }
  //发布一篇文章
  async postArticle(type_id, title, article_content, introduce, addTime) {
    console.log(
      "到达数据库",
      type_id,
      title,
      article_content,
      introduce,
      addTime
    );
    const statement = `INSERT INTO article (type_id, title, article_content, introduce, addTime) VALUES (?,?,?,?,?)`;
    const result = await connection.execute(statement, [
      type_id,
      title,
      article_content,
      introduce,
      addTime,
    ]);
    return result[0];
  }
  //更新上一篇文章
  async updateArticle(type_id, title, article_content, introduce, addTime) {
    const statement = `UPDATE article SET type_id=?, title=?, article_content=?, introduce=?, addTime=? WHERE id order by id desc limit 1`;
    const result = await connection.execute(statement, [
      type_id,
      title,
      article_content,
      introduce,
      addTime,
    ]);
    return result[0];
  }
  //获取所有文章
  async getArticle() {
    const statement = `SELECT * FROM article`;
    const result = await connection.execute(statement);
    return result[0];
  }
  //逆序获取所有文章
  async getRevseArticle() {
    const statement = `SELECT * FROM article order by id desc`;
    const result = await connection.execute(statement);
    return result[0];
  }
  //根据id删除某一文章
  async removeArticle(id) {
    const statement = `DELETE FROM article WHERE id = ?`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
  //获取某一类型的所有文章
  async getType(id) {
    const statement = `SELECT * FROM article WHERE type_id =? `;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new ArticleService();
