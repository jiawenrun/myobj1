; !function () {
    let ajax = new Ajax();
    ajax.hostname = 'http://localhost:81';
    var form = layui.form;
    form.on('submit(login)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        ajax.post('/user/login', data.field).then(function (result) {
            // alert(result)
            let r = JSON.parse(result);
        //    alert(r)
            layer.msg(r.Msg)
            if (r.code == 1) {
                // alert(r.result)
                window.location.href = `./center.html?uid=`+r.result
            }
        }).catch(function (err) {
            console.log(err)
        });
        return false;
    });
}();
document.querySelector('#register').onclick=function(){
    window.location.href="file:///D:/phpStudySetup/PHPTutorial/WWW/hwork/tuling/register.html"
}