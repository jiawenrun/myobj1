const express = require('express');
const router = express.Router();
const banModlule = require('../model/banModlule')

router.post('/creatban',(req,res)=>{
    var banmodlule=new banModlule()
    delete req.body.avatar
	banmodlule.creatban(req.body,(results)=>{
		res.json(results)
	})
})
router.get('/getbanname',(req,res)=>{
	var banmodlule=new banModlule()
	banmodlule.getbanname(req.query.bid,(results)=>{
		res.json(results)
	})
})
module.exports = router