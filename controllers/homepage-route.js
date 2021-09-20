const router = require('express').Router();
const{Post, User, Comment} = require('../../models/');
router.get('/', async (req,res)=>{
    try{
        const getPostData = await Post.findAll({
            include: [User]
        });
        const posts = getPostData.map((post)=> post.get({plain:true}));
        res.render('allPosts', {posts});
        }
        catch (err){ res.status(500).json(err);}
});
router.get('/post/:id', async (req,res)=>{
    try{
        const getPostData = await Post.findByPk(req.params.id,{
            include: [
                User,
            {model: Comment,
            include:[User]},
            ],
        });
        if(getPostData){
            const posts = getPostData.get({plain:true});
            res.render('singlePost', {post});
         }else{res.status(404).end();}
}catch (err){ res.status(500).json(err);}});


module.exports = router;