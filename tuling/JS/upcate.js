let bianji = document.querySelector('.bianji')
let ajax = new Ajax();
ajax.hostname = 'http://localhost:81';
let search = window.location.search;
let cid = search.split('=').pop();
// layer.msg(up)
layui.use('table', function () {
    var table = layui.table;
    //第一个实例
    table.render({
        elem: '#demo'
        , height: 500
        , url: ajax.hostname + '/book/books?cid=' + cid //数据接口
        , page: true //开启分页
        , totalRow: true
        , cols: [[ //表头
            { field: 'bid', title: 'ID', width: 80, sort: true, fixed: 'left' }
            , { field: 'title', title: '文章标题', width: 80, edit: 'text' }
            , { field: 'author', title: '作者', width: 80, sort: true, edit: 'text' }
            , { field: 'price', title: '价格', width: 80, sort: true, edit: 'text' }
            , { field: 'translator', title: '译者', width: 80, edit: 'text' }
            , { field: 'tags', title: '标签', width: 80, edit: 'text' }
            , { field: 'imgs', title: '图片', width: 80, sort: true, edit: 'text' }
            , { field: 'abstract', title: '摘要', width: 80, sort: true, edit: 'text' }
            , { field: 'charact', title: '特色', width: 80, edit: 'text' }
            , { field: 'addtimes', title: '上架时间', width: 130, edit: 'text' }
            , { field: 'updatetimes', title: '上次修改时间', width: 130}
            , { field: 'cid', title: '类别ID', width: 130}
            , { fixed: 'right', width: 150, align: 'center', toolbar: '#barDemo' }
        ]]
        
    });
    table.on('tool(test)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的DOM对象

        if (layEvent === 'detail') { //查看
            //do somehing
        } else if (layEvent === 'del') { //删除
            layer.confirm('真的要删除文章么', function (index) {
                ajax.post('/book/del', data).then(function (result) {
                    let del = JSON.parse(result)
                    layer.msg(del.Msg)
                    obj.del();
                    // console.log(data)
                    layer.close(index);
                }).catch(function (err) {
                    console.log(err)
                });
                return false;
            });
        } else if (layEvent === 'edit') { //编辑
            //do something
            //同步更新缓存对应的值
            // console.log( data)
            layer.confirm('保存修改吗', function (index) {
                ajax.post('/book/updata', data).then(function (result) {
                    let r = JSON.parse(result);
                    // console.log(r)
                    layer.msg(r.Msg)
                  }).catch(function (err) {
                    console.log(err)
                  });
                return false;
            });
        }
    });
});





//
