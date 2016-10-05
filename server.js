'use strict';
const koa = require('koa');
const app = koa();

//加载配置文件
const config = require('./config/' + app.env);
app.keys = ['conglai.test'];

app.listen(config.port);
