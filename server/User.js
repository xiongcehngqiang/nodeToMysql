const sequelize = require('sequelize');
const db = require('../db');
const random = require('../utils/random');

// 定义一个 user model
const {
  STRING
} = sequelize;

const User = db.define('user', {
  user_name: {
    type: STRING(32),
    unique: true,
  },
  password: {
    type: STRING(32),
    defaultValue: "123456"
  }
});
const createTable = async () => {
  // 可以选择在 应用/服务器 启动的时候，把 User 映射到数据库中，比如这里会在数据库中自动创建一张表: users
  // 如果 force 为 true, 则每次都会重建表 users
  await User.sync({
    force: false,
  });
}
//调用该函数,数据库有 表就会映射，没有则创建
createTable()
module.exports = User;