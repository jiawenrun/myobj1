layui.use('table', function () {
    var table = layui.table;
    //第一个实例
    table.render({
        elem: '#catelist'
        , height: 400
        , url: 'http://localhost:81/cate/getcate' //数据接口
        , page: true //开启分页
        , cols: [[ //表头
            { field: 'cid', title: 'ID', width: 80, sort: true, fixed: 'left' }
            , { field: 'name', title: '类名(可编辑)', width: 200, edit: 'text' }
            , { fixed: 'right', width: 250, align: 'center', toolbar: '#barDemo' }
        ]]
    });
    ; !function () {
        let ajax = new Ajax();
        ajax.hostname = 'http://localhost:81';
        table.on('tool(catelist)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            var tr = obj.tr; //获得当前行 tr 的DOM对象
            if (layEvent === 'detail') { //查看
                layer.confirm('保存修改吗', function (index) {
                    ajax.post('/cate/upcate', data).then(function (result) {
                        let r = JSON.parse(result);
                        // console.log(r)
                        layer.msg(r.Msg)
                      }).catch(function (err) {
                        console.log(err)
                      });
                    return false;
                },()=>{
                    // document.URL=location.href 
                    location.reload()
                    // window.location.href='file:///D:/phpStudySetup/PHPTutorial/WWW/hwork/tuling/catelist.html'
                });
            } else
                if (layEvent === 'del') { //删除
                    layer.confirm('真的要删除文章该文章类别么', function (index) {
                        ajax.post('/cate/del', data).then(function (result) {
                            let del = JSON.parse(result)
                            layer.msg(del.Msg)
                            obj.del();
                            layer.close(index);
                        }).catch(function (err) {
                            console.log(err)
                        });
                        return false;

                    });
                } else if (layEvent === 'edit') { //编辑
                    window.location.href = './upcate.html?cid=' + data.cid;
                }
        });
    }();


    

});

