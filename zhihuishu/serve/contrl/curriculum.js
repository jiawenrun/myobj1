const express = require('express');
const router = express.Router();
const curriModlule = require('../model/curriModlule')

router.post('/created',(req,res)=>{
	var currimodlule=new curriModlule()
	delete req.body.avatar
	// console.log(req.body)
	req.body.kaike = new Date();
	currimodlule.creatCurri(req.body,(results)=>{
		if (results.insertId) {
            res.json({ code: 1, Msg: '添加成功' });
        } else {
            res.json({ code: -1, Msg: '添加失败' });
        }
	})
})
router.get('/getFive',(req,res)=>{
	var currimodlule=new curriModlule()
	currimodlule.getFive((results)=>{
		res.json(results)
	})
})
router.get('/getHotfive',(req,res)=>{
	var currimodlule=new curriModlule()
	currimodlule.getHotfive((results)=>{
		res.json(results)
	})
})
router.get('/getNewfive',(req,res)=>{
	var currimodlule=new curriModlule()
	currimodlule.getNewfive((results)=>{
		res.json(results)
	})
})
router.get('/literature',(req,res)=>{
	var currimodlule=new curriModlule()
	currimodlule.literature((results)=>{
		res.json(results)
	})
})
router.get('/art',(req,res)=>{
	var currimodlule=new curriModlule()
	currimodlule.art((results)=>{
		res.json(results)
	})
})
router.get('/seacheachcurri',(req,res)=>{
	var currimodlule=new curriModlule()
	// console.log(req.query.keyword)
	currimodlule.seacheachcurri(req.query.keyword,(results)=>{
		res.json(results)
	})
})

router.get('/getcurri',(req,res)=>{
	var currimodlule=new curriModlule()
	// console.log(req.query.cid)
	currimodlule.getcurri(req.query.cid,(results)=>{
		res.json(results)
	})
})

module.exports = router