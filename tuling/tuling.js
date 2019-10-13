const express=require('express');
const tuling=express();

const bodyparser=require('body-parser')
tuling.use(require('./base/cors').cors);
tuling.use(bodyparser.urlencoded({extended:true}));
tuling.use(bodyparser.json());


tuling.get('/',(req,res)=>{
    res.send("首页")
})
tuling.use('/user',require('./contrl/user'))
tuling.use('/cate',require('./contrl/cate'))
tuling.use('/book',require('./contrl/books'))
tuling.use('/upl',require('./contrl/multer'))
tuling.use(express.static('./upload'))


tuling.listen(81,()=>{
    console.log('Sever had on 81');
})