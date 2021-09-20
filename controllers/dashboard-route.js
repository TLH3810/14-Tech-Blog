const router = require('express').Router();
const { Post, User, Comment } = require('../../models/');

router.get('/', withAuth, async (req, res) => {
    try {
        const getPostData = await Post.findAll({
            include: [{ model: User, }],
            where: {
                userId: req.session.userId
            }
        });
        const posts = getPostData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts });
    }
    catch (err) { res.redirect('login'); }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const getPostData = await Post.findByPk(req.params.id, {
        });
        if (getPostData) {
            const posts = getPostData.get({ plain: true });
            res.render('editSinglePost', { post, postId: req.params.id });
        } else { res.status(404).end(); }
    } catch (err) { res.redirect('login'); }
});

router.get('/new', withAuth, (req, res) => {
    res.render('newPost', { post });
});


module.exports = router;