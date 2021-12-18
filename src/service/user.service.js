const connection = require("../app/database");

class UserService {
  async create(name, password) {
    console.log(name, password);
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [name, password]);
    return result;
  }

  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new UserService();
