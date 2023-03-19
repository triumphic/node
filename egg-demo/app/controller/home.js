const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello, world!';
  }

  async jskai() {
    const { ctx } = this;
    ctx.body = '<h1>Hello JSKai</h1>';
  }
}

module.exports = HomeController;
