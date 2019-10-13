const express = require('express');
const router = express.Router();
// const cookieParser=require('cookie-parser')
const usermodel123 = require('../model/usermodel')
router.post('/reg',(req,res)=>{
    // console.log(req.body);
    let usermodel =new usermodel123();
    delete req.body.passwd1;
    req.body.regtimes = new Date().toLocaleString();

    usermodel.registerUser(req.body,(results)=>{
        // console.log(results.insertId);
        if(results.insertId){
            res.json({code:1,Msg:'注册成功'});
        }else{
            res.json({code:-1,Msg:'注册失败'});
        }
    });
})
// router.use(cookieParser('aaaa'))
// router.get('/log',(req,res)=>{
//     let usermodel =new usermodel123();
//     // console.log(req)
//     res.cookie('aaa','bbb')
//         res.send("cookie")
//     usermodel.logUser(req.query.uid,(results)=>{
        
//        res.json(results);
//     });
// })
router.post('/login',(req,res)=>{
    // console.log(req.body);
    let usermodel =new usermodel123();
    let username=req.body.username;
    let passwd=req.body.passwd;

    usermodel.loginUser(username,(results)=>{
        // console.log(results)
        let ob={
            code:1,
            Msg:'登陆成功',
            // result:results[0].uid
        };
        if(results.length==0){
            ob={
                code:-1,
                Msg:'用户不存在'
            }
        }else if(results[0].passwd!=passwd){
            ob={
                code:0,
                Msg:'密码错误'
            }
        }else{
            req,session.username=username;
            req,session.uid=results[0].uid;
        }    
       res.json(ob);
    });
})


module.exports = router