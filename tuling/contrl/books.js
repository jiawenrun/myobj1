const express = require('express');
const router = express.Router();
const booksmodel123 = require('../model/booksmodel')
router.get('/books', (req, res) => {
    let booksmodel = new booksmodel123();
    let page = req.query.page ? req.query.page : 1;
    let limitnum = req.query.limit ? req.query.limit : 5;
    let cid = req.query.cid
    booksmodel.getbookscid(cid, page, limitnum, (results) => {
    // console.log(results)
        res.json({ "code": 0, "msg": "", "count": results[0][0].nums, "data": results[1] })
    });
})
router.post('/del', (req, res) => {
    let booksmodel = new booksmodel123();
    // console.log(req.body.bid)
    booksmodel.deltBookCate(req.body.bid, (results) => {
        // console.log(results);
        if (results.affectedRows) {
            res.json({ code: 1, Msg: '删除成功' });
        } else {
            res.json({ code: -1, Msg: '删除失败' });
        }
    });
})
router.post('/badd', (req, res) => {
    // console.log(req.body);
    let booksmodel = new booksmodel123();
    delete req.body.avatar;
    // console.log(req.body)
    req.body.addtimes = new Date();
    booksmodel.creatBook(req.body, (results) => {
        // console.log(results);
        if (results.insertId) {
            res.json({ code: 1, Msg: '添加成功' });
        } else {
            res.json({ code: -1, Msg: '添加失败' });
        }
    });
})

router.post('/updata', (req, res) => {
    // console.log(req.body);
    let booksmodel = new booksmodel123();
    req.body.updatetimes = new Date().toLocaleString();

    // console.log(req.body)
    booksmodel.updata(req.body, (results) => {
        // console.log(results);
        if (results) {
            res.json({ code: 1, Msg: '修改成功' });
        } else {
            res.json({ code: -1, Msg: '修改失败' });
        }
    });
})
router.post('/getbooks', (req, res) => {
    // console.log(req.body);
    let booksmodel = new booksmodel123();
    booksmodel.getBooks((results) => {
        // console.log(results);
        res.json(results)
    });
})
module.exports = router