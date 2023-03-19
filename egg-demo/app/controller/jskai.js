const Controller = require('egg').Controller;

class JskaiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I am JSKai</h1>';
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>杨幂， 正在向你走来</h1>');
      }, 5000);
    });
  }
}

module.exports = JskaiController;
