; !function () {
    let ajax = new Ajax();
    ajax.hostname = 'http://localhost:81';
    var form = layui.form;
    form.on('submit(addcate)', function (data) {
        ajax.post('/cate/creat', data.field).then(function (result) {
            let r = JSON.parse(result);
            layer.msg(r.Msg)
            if (r.code == 1) {
                window.location.href = './catelist.html'
            }
        }).catch(function (err) {
            console.log(err)
        });
        return false;
    });
    let fid = document.querySelector('select[name="fid"]');
    if (fid) {
        ajax.get('/cate/getfathercate').then(function (result) {
            let r = JSON.parse(result);
            console.log(r)
            let str = `<option value="0">=选择父级分类=</option>`;
            r.forEach(el => {
                str+= `<option value="${el.cid}">${el.name}</option>`;
                fid.innerHTML=str;
                form.render('select');
            });
        }).catch(function (err) {
            console.log(err)
        });
    }
}();