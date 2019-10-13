const express=require('express');
const MicModel=require('../model/MicModel');//引入UserModel
const router=express.Router();//创建路由


router.get('/getLearnnn',(req,res)=>{
    let MicModela=new MicModel();
    MicModela.getLearn((results)=>{    /* req.body, */
    	res.json(results)
    });
});

router.get('/getCulll',(req,res)=>{
    let MicModelb=new MicModel();
    MicModelb.getCurri((results)=>{    /* req.body, */
    	res.json(results)
    });
});

router.get('/getMeetinggg',(req,res)=>{
    let MicModelc=new MicModel();
    MicModelc.getMeeting((results)=>{    /* req.body, */
    	res.json(results)
    });
});


module.exports=router; //导出路由