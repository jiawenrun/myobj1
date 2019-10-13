layui.use('form', function () {
  var form = layui.form;
  let ajax = new Ajax();
  ajax.hostname = 'http://localhost:81';
  let fid = document.querySelector('.bookclass');
  // if (fid) {
  fid.style.marginBottom = 20 + 'px';
  ajax.get('/cate/getfathercate').then(function (result) {
    // console.log(result)
    // let r = JSON.parse(result);
    // layer.msg(r.Msg)
    let r = JSON.parse(result);
    // console.log(r)
    let str = `<option value="">请选择文章类型</option>`;
    r.forEach(el => {
      // str=''
      // str += `<input type="radio" name="cid" value="${el.cid}" title="${el.name}"></input>`;
      str += `<option value="${el.cid}">${el.name}</option>`
      fid.innerHTML = str;
      form.render();
    });

  }).catch(function (err) {
    console.log(err)
  });

  // }
  form.on('submit(*)', function (data) {
    // console.log(data)
    let ajax = new Ajax();
    ajax.hostname = 'http://localhost:81';
    ajax.post('/book/badd', data.field).then(function (result) {
      let r = JSON.parse(result);
      layer.alert(r.Msg)
      if (r.code == 1) {
        window.location.href = '#'
      }
    }).catch(function (err) {
      console.log(err)
    });

    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
  });
  //各种基于事件的操作，下面会有进一步介绍
});

layui.use('upload', function () {
  var upload = layui.upload;

  //执行实例
  var uploadInst = upload.render({
    elem: '#file' //绑定元素
    , url: 'http://localhost:81/upl/' //上传接口\
    , field: 'avatar'
    , done: function (res) {
      document.querySelector('.fileimg').src = res.data.src;
      document.querySelector('.fileimg').style.display = "block";
      document.querySelector('input[name="imgs"]').value = res.data.src;
      console.log(res)
    }
    , error: function () {
      //请求异常回调
    }
  });
});
//富文本编辑器
let E = window.wangEditor
let editor = new E('#editor')
let charact=document.querySelector('textarea[name="charact"]')
editor.customConfig.onchange = function (html) {
  // 监控变化，同步更新到 textarea
  charact.value='`'+html+'`'
}
editor.customConfig.uploadImgServer = 'http://localhost:81/upl/imgs'
editor.customConfig.uploadFileName = 'imgs'
editor.create()
