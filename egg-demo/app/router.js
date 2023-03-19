'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/jskai', controller.home.jskai);
  router.get('/my', controller.jskai.index);
  router.get('/getGirls', controller.jskai.getGirls);
};
