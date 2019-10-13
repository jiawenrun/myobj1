const express = require('express');
const CourseModel = require('../Model/CourseModel')
const router = express.Router();

//返回所有的书籍
router.post('/searchCourse', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    //对数据进行操作
    let courseModel = new CourseModel();
    // let page = req.query.page ? req.query.page : 1;
    // let limitnum = req.query.limit ? req.query.limit : 10;
    // this.searchname
    // console.log(req.body)
    let course = req.body.searchname;
    if(course){
    courseModel.getAllBook(course, (results) => {
        res.json(results);
        // res.json(ob);
    })
}
});

module.exports = router;