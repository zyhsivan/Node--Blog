const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../../app/config");

class AuthController {
  //登陆成功，发送token
  async login(ctx, next) {
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 3600,
      algorithm: "RS256",
    });
    console.log("返回成功");
    ctx.body = { id, name, token };
  }

  async success(ctx, next) {
    ctx.body = "授权成功~";
  }
}

module.exports = new AuthController();
