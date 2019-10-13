const express = require('express')
const multer = require('multer')
const router = express.Router();
let hostname = 'http://localhost:81';
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../upload2/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '_' + Math.random().toString().substr(2, 10) + '.' + file.originalname.split('.').pop())
    }
})
// originalname
let upl = multer({ storage: storage })
router.post('/', upl.single('avatar'), function (req, res, next) {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话\
    // console.log(req.file)
    let data = {
        "code": 0
        , "msg": ""
        , "data": {}
    }
    data.data.src = hostname + '/' + req.file.filename;
    res.json(data)
})

module.exports = router;