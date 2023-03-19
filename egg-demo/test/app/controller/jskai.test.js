const { app } = require('egg-mock/bootstrap');

describe('jskai test', () => {
  it('jskai index', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>I am JSKai</h1>');
  });

  it('jskai getGirls', async () => {
    await app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>杨幂， 正在向你走来</h1>');
  });
});
