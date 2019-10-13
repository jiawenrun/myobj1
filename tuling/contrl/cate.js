const express = require('express');
const router = express.Router();
const catemodel123 = require('../model/catemodel')
router.post('/creat', (req, res) => {
    // console.log(req.body);
    let catemodel = new catemodel123();
    delete req.body.passwd1;
    catemodel.creatCate(req.body, (results) => {
        // console.log(results);
        if (results.insertId) {
            res.json({ code: 1, Msg: '注册成功' });
        } else {
            res.json({ code: -1, Msg: '注册失败' });
        }
    });
})
router.post('/del', (req, res) => {
    let catemodel = new catemodel123();
    catemodel.deltCate(req.body.cid, (results) => {
        // console.log(results);
        if (results.affectedRows) {
            res.json({ code: 1, Msg: '删除成功' });
        } else {
            res.json({ code: -1, Msg: '删除失败' });
        }
    });
})
router.get('/getfathercate', (req, res) => {
    let catemodel = new catemodel123();
    catemodel.getfathercate((results) => {
        res.json(results)
    });
})
router.post('/cid', (req, res) => {
    let catemodel = new catemodel123();
    catemodel.getCid((results) => {
        res.json(results)
    });
})
router.get('/getcate', (req, res) => {
    let catemodel = new catemodel123();

    let page = req.query.page ? req.query.page : 1;
    let limitnum = req.query.limit ? req.query.limit : 5;
    catemodel.getAllcate(page, limitnum, (results) => {
        // console.log(results.length)
        // console.log(results)
        let ob = { "code": 0, "msg": "", "count": results[0][0].nums, "data": results[1] };
        res.json(ob)
    });
})
router.post('/upcate', (req, res) => {
    let catemodel = new catemodel123();
    catemodel.upcate(req.body, (results) => {
        // console.log(results);
        if (results) {
            res.json({ code: 1, Msg: '修改成功' });
        } else {
            res.json({ code: -1, Msg: '修改失败' });
        }
    });
})
module.exports = router