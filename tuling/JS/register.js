; !function () {
    var form = layui.form;
    form.on('submit(register)', function (data) {
      // layer.msg(JSON.stringify(data.field));
      let ajax = new Ajax();
      ajax.hostname = 'http://localhost:81';
      ajax.post('/user/reg', data.field).then(function (result) {
        let r = JSON.parse(result);
        layer.msg(r.Msg)
        if (r.code == 1) {
          window.location.href = './login.html'
        }
      }).catch(function (err) {
        console.log(err)
      });
      return false;
    });
  }();
  document.querySelector('#login111').onclick=function(){
    window.location.href="file:///D:/phpStudySetup/PHPTutorial/WWW/hwork/tuling/login.html"
}