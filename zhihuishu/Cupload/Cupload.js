// axios.defaults.baseURL = 'https://jiawenrun:81';
layui.use('form', function () {
    var form = layui.form;

    //监听提交
    form.on('submit(formDemo)', function (data) {
        console.log(data.field)

        axios.post('http://localhost:81/curri/created', data.field )
            .then(function (response) {
                let r = JSON.parse(response);
                layer.alert(r.Msg)
            })
            .catch(function (error) {
                console.log(error);
            });



        //   layer.msg(JSON.stringify(data.field));
        return false;
    });
});


layui.use('upload', function () {
    var upload = layui.upload;

    //执行实例
    var uploadInst = upload.render({
        elem: '#file1' //绑定元素
        , url: 'http://localhost:81/upl1/' //上传接口\
        , field: 'avatar'
        , done: function (res) {
            document.querySelector('input[name="curimg"]').value = res.data.src;
            // console.log(res)
        }
        , error: function () {
            //请求异常回调
        }
    });
});

layui.use('upload', function () {
    var upload = layui.upload;

    //执行实例
    var uploadInst = upload.render({
        elem: '#test5' //绑定元素
        , url: 'http://localhost:81/upl2/' //上传接口\
        , field: 'avatar'
        , accept: 'video'
        , done: function (res) {
            document.querySelector('input[name="curmedia"]').value = res.data.src;
            console.log(res)
        }
        , error: function () {
            //请求异常回调
        }
    });
});
