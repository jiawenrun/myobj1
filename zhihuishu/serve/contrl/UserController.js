const express=require('express');
const UserModel=require('../model/UserModel2')
//引入UserModel
const router=express.Router();//创建路由


router.get('/getApploaddd',(req,res)=>{
    let UsersModel=new UserModel();
    UsersModel.getMobile((results)=>{    /* req.body, */
    	res.json(results)
    });
});



module.exports=router; //导出路由