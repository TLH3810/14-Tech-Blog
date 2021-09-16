const UserID = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(UserId, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(UserId, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
