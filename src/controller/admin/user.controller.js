const UserService = require("../../service/user.service");

class adminUserController {
  async create(ctx, next) {
    //解析数据
    const { name, password } = ctx.request.body;
    console.log('controller设置成功');
    //数据库操作
    const result = await UserService.create(name, password);
    //返回数据
    ctx.body = result;
  }
}

module.exports = new adminUserController();
