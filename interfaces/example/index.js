'use strict';

module.exports = {
  config: {
    path: 'xxxx',
    method: 'get',
    params: {
      pid: Number,
      name: String,
    }
  },

  deps: [],
  middlewares: [],
  create: function() {
    return function*() {

    };
  };
};
