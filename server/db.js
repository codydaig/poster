var mysql = require('mysql');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('posts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Verify connection...

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection to mySQL successful!');
  })
  .catch(function(err) {
    console.log('Unable to connect to db: ', err);
  });

// User table...

var User = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING,
    field: 'user_name',
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
});

// Post table...

var Post = sequelize.define('post', {
  userPost: {
    type: Sequelize.STRING,
    field: 'user_post'
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  }
});

Post.sync();
User.sync();
User.hasMany(Post);
Post.belongsTo(User);

exports.User = User;
exports.Post = Post;







