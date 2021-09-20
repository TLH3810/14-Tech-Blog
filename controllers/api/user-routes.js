const router = require('express').Router();
const {User}=require('../../models');

router.post('/', async (req,res)=> {
    try{
        const addUser = await User.create({
            userName: req.body.userName,
            password: req.body.password,
        });
        req.session.save(()=>{
            req.session.userId = addUser.id;
            req.session.userName = addUser.userName;
            req.session.login = true;
            res.json(addUser);
        });
    }catch(err){res.status(500).json(err);}
});

//add login post
router.post('/login', async (req, res)=>{
    try{
        const userLogin = await User.findOne({
            where:{userName: req.body.userName,},
        });
        if (!userLogin){res.status(400).json({message:'Please set up account, user not identifed!'});}
        const userPassword = userLogin.checkPassword(req.body.password);
        if (!userPassword){res.status(400).json({message:'Password not correct'});}
        req.session.save(()=>{
            req.session.userId = addUser.id;
            req.session.userName = addUser.userName;
            req.session.login = true;
            res.json({addUser, message:'Login sucessful.'});
        });
    }catch(err){res.status(400).json({message:'Please set up account, user not identifed!'});}
});
//add logout post

module.exports = router;