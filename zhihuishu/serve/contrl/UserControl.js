const express = require('express');
const UserModel = require('../Model/UserModel')
const router = express.Router();
router.post('/reg', (req, res) => {

    let userModel = new UserModel();
    let tel = req.body.tel;
    let passwd = req.body.passwd;
    let name="游客";
    let head="https://image.zhihuishu.com/zhs/ablecommons/demo/201804/b43ff1ee189f4879ae115873d2079cd9.jpg"
    delete req.body.code;
    // // req.body.regtimes = new Date().toLocaleString();
    userModel.UserRegister(tel, passwd, head,name,(results) => {

        if (results.code) {
            res.json({ Msg: '该手机号已被注册' })
        } else if (results.affectedRows) {
            res.json({ code: 1, Msg: '注册成功' });
        } else {
            res.json({ code: -1, Msg: '注册失败，请重新操作' });
        }
    })
});
router.post('/login', (req, res) => {
    //对数据进行操作
    let userModel = new UserModel();
    let tel = req.body.tel;
    let passwd = req.body.passwd;
    // console.log(passwd);
    userModel.getDataByTel(tel, (results) => {
        // console.log(results)
        let obj = {
            code: 1,
            Msg: '登陆成功'
        };
        if (results.length == 0) {
            obj = {
                code: -1,
                Msg: '手机号不存在，请先注册'
            };
        } else if (results[0].passwd != passwd) {
            obj = {
                code: 0,
                Msg: '密码错误'
            };
        }
        req.session.tel = tel;
        console.log(req.session.id)
		
        res.json(obj);

    })
});

router.post('/loginSno', (req, res) => {
    //对数据进行操作
    let userModel = new UserModel();
    let tel = req.body.tel;
    let passwd = req.body.passwd;
    // console.log(passwd);
    userModel.getDataBySno(tel, (results) => {
        // console.log(results)
        let obj = {
            code: 1,
            Msg: '登陆成功'
        };
        if (results.length == 0) {
            obj = {
                code: -1,
                Msg: '手机号不存在，请先注册'
            };
        } else if (results[0].passwd != passwd) {
            obj = {
                code: 0,
                Msg: '密码错误'
            };
        }
		req.session.tel = tel;
        res.json(obj);
        
    })
});
router.get('/getsession', (req, res)=>{
    res.json(req.session);
});
router.post('/getUserNew', (req, res)=>{
    // res.json(req.session);
    let userModel = new UserModel();
    let tel = req.body.tel;
    // console.log(tel);
    userModel.getUserNew(tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.get('/getUserNew1', (req, res)=>{
    // res.json(req.session);
    let userModel = new UserModel();
    let tel = req.query.tel;
    // console.log(tel);
    userModel.getUserNew(tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.post('/changeName', (req, res)=>{
    // res.json(req.session);
    let userModel = new UserModel();
    let name = req.body.name;
    let tel = req.body.tel;
    // console.log(name,tel);
    userModel.changeName(name,tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.post('/changeHead', (req, res)=>{
    // res.json(req.session);
    let userModel = new UserModel();
    let head = req.body.head;
    let tel = req.body.tel;
    // console.log(name,tel);
    userModel.changeHead(head,tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.post('/changePasswd', (req, res)=>{
    // res.json(req.session);
    let userModel = new UserModel();
    let passwd = req.body.passwd;
    let tel = req.body.tel;
    // console.log(name,tel);
    userModel.changePasswd(passwd,tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.post('/changeEmail', (req, res)=>{
    // res.json(req.body);
    let userModel = new UserModel();
    let email = req.body.email;
    let tel = req.body.tel;
    // console.log(name,tel);
    userModel.changeEmail(email,tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.post('/changeTel', (req, res)=>{
    // res.json(req.body);
    let userModel = new UserModel();
    let tel1 = req.body.tel1;
    let tel = req.body.tel;
    // console.log(name,tel);
    userModel.changeTel(tel1,tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
router.post('/logout', (req, res)=>{
    // res.json(req.session);
    req.session.destroy(function(err) {

        // res.redirect('/');

    })
});
router.post('/changeSex', (req, res)=>{
    // res.json(req.session);
    let userModel = new UserModel();
    let sex = req.body.sex;
    let tel = req.body.tel;
    // console.log(name,tel);
    userModel.changeSex(sex,tel, (results) => {
        res.json(results)
        // console.log(results)
    })
});
module.exports = router;