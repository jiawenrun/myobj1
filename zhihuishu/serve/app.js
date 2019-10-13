const express=require('express');
const app=express();
const bodyparser=require('body-parser')

app.use(require('./base/cors').cors)

app.use(require('./base/cookieSesion').cookie);
app.use(require('./base/cookieSesion').session);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.get('/',(req,res)=>{
    res.send("首页")
})
//罗娟
app.use('/subject', require('./contrl/SubjectController'));

// 杨美云
app.use('/course', require('./contrl/CourseControl'));
app.use('/user', require('./contrl/UserControl'));

// 黄玲
app.use("/getAppload",require("./contrl/UserController"))
app.use("/getMeeting",require("./contrl/MicController"))
app.use("/getLearn",require("./contrl/MicController"))
app.use("/getCul",require("./contrl/MicController"))

// 贾文润
app.use('/curri',require("./contrl/curriculum"))
app.use('/cless',require("./contrl/cless"))
app.use('/upl1',require('./contrl/multer1'))
app.use('/upl2',require('./contrl/multer2'))
app.use('/upl3',require('./contrl/up'))
app.use('/ban',require("./contrl/getBanbid"))
app.use(express.static('./upload1'))
app.use(express.static('./upload2'))

app.listen(81,()=>{
    console.log('Sever had on 81');
})