const router = require('express').Router();
const {Post}= require('../../models');
const withAuth = require('../../utils/authenticate');


router.post('/', withAuth, async (req,res)=>{
    
    try{
        const newPost = await Post.create({
            ...req.body,userId:req.session.userId
        });
        res.json(newPost);
        }
        catch (err){ res.status(500).json(err);}
});
router.put('/:id', withAuth, async (req,res)=>{
    try{
        const putPostData = await Post.update(req.body,{
            where: {id: req.params.id,},
        });
        if(putPostData == null){
            res.status(200).end();
         }else{res.status(404).end();}
}catch (err){ res.status(500).json(err);}});

router.delete('/:id', withAuth, async (req, res)=>{
    try{
        const putPostData = Post.destroy({
            where: {id: req.params.id,},
        });
        if(putPostData == null){
            res.status(200).end();
         }else{res.status(404).end();}
}catch (err){ res.status(500).json(err);}
});
module.exports = router;