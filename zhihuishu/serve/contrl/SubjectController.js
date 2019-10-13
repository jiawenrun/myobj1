const express = require('express');
const SubjectModel = require('../model/SubjectModel');
const router = express.Router();
//查询
router.get('/subject1', (req, res) => {
   // console.log(req.query)
   let subjectModel = new SubjectModel();
   subjectModel.getSubject(req.body,(results)=>{
   //  console.log(results);
    res.json(results)
   })
});


module.exports = router;