const express = require('express');
const router = express.Router();
const xuanModlule = require('../model/xuanModlule')


router.get('/creat',(req,res)=>{
	var xuanmodlule=new xuanModlule()
	xuanmodlule.creat(req.query.cid,req.query.uid,(results)=>{
		res.json(results)
	})
})
router.get('/getCid',(req,res)=>{
    var xuanmodlule=new xuanModlule()
    console.log(req.query.uid)
	xuanmodlule.getCid(req.query.uid,(results)=>{
		res.json(results)
	})
})
router.get('/deCid',(req,res)=>{
    var xuanmodlule=new xuanModlule()
	xuanmodlule.deCid(req.query.cid,(results)=>{
		res.json(results)
	})
})
module.exports = router