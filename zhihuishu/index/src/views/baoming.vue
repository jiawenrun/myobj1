<template>
<div class="mymymy">
<div class="fatherone">
  <h2>北京大学微专业报名申请表</h2>
  <div class="bbbox">
      <div class="bbbox1"><img src="https://file.lingxi360.com/form/20190718/5d302bc953261.jpg-scale560"></div>
      <div class="bbbox2"><img src="https://file.lingxi360.com/form/20190718/5d302bd4270bd.jpg-scale560"></div>
</div>
<div class="flag1">
<span>根据你的过往填写记录，已为你自动填充表单，<a href="#">点击清除</a></span></div>
</div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm mytabel">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" id="rulename"></el-input>
  </el-form-item>
    <el-form-item label="手机" prop="mytelephone0">
    <el-input v-model="ruleForm.mytelephone" id="rulename"></el-input>
  </el-form-item>
    <el-form-item label="邮箱" prop="myemail0">
    <el-input v-model="ruleForm.myemail0" id="rulename"></el-input>
  </el-form-item>
    <el-form-item label="学校" prop="myshcool0">
    <el-input v-model="ruleForm.myshcool0" id="rulename"></el-input>
  </el-form-item>
    <el-form-item label="专业" prop="myobject0">
    <el-input v-model="ruleForm.myobject0" id="rulename"></el-input>
  </el-form-item>
    <el-form-item label="年级" prop="mygrade0">
    <el-input v-model="ruleForm.mygrade0" id="rulename"></el-input>
  </el-form-item>
  <el-form-item label="留言" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item class="tijiaomy" >
    <el-button class="tjstyle" type="primary" @click="submitForm('ruleForm')" >提交</el-button>
  </el-form-item>
</el-form>
<div class="last0">
<div class="last01"><a href="#">知道</a><a href="#">创建</a></div>
<div class="last02">
    <a href="#">该表单通过</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#"><img src="https://fr.lingxi360.com/dist/images/lingxi_logo.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;<a href="#">成生</a><a href="#">举报</a>
    </div>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          mytelephone0: '',
          myemail0: '',
          myshcool0: '',
          myobject0: '',
          mygrade0: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '必填', trigger: 'blur' }
          ],
         mytelephone0:[
            { required: true, message: '格式有误', trigger: 'blur' },
         ],
     myemail0: [
            { required: true, message: '格式有误', trigger: 'blur' },
          ],
         myshcool0:[
            { required: true, message: '必填', trigger: 'blur' },
         ],
         mygrade0:[
            { required: true, message: '必填', trigger: 'blur' },
         ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
#rulename{
    width: 460px;
    text-shadow: none;
    box-shadow: none;
}
.tijiaomy{
  margin: 0 auto;
  width: 230px;
}
.last0 .last02>img{
    width: 70px;
    height: 20px;
}
.last0 .last02{
  width: 600px;
    height: 35px;
           display: flex;
    justify-content: space-around;
    align-items: center;
}
.last0 .last01{
  width: 150px;
    height: 35px;
           display: flex;
    justify-content: space-around;
    align-items: center;
}
.last0{
   height:80px;
  width: 600px;
  margin: 0 auto;
        display: flex;
       flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.mytabel{

  margin: 0 auto;
    width: 560px;
    height:600px;
}
.bbbox .bbbox2{
    width: 560px;
    height:467px;
}
.bbbox .bbbox1{
    width: 560px;
    height:224px;
}
.bbbox{
  margin: 0 auto;
    width: 600px;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px dashed rgb(155, 154, 154);
}
.fatherone>h2{
 width: 600px;
    height: 60px;
    display:block;
        margin: 0 auto;
    padding: 10px 0;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
}
.flag1>span{
  display:inline-block;
  margin:0 auto;
  color:  rgb(155, 154, 154);
}
.flag1{
  margin:0 auto;
  height:60px;
  line-height: 60px;
  width: 600px;
  text-align: center;
}
.fatherone,.flag1{
margin: 0 auto;
}
.mymymy{
  margin: 30px auto;
  width: 600px;
 box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}
</style>