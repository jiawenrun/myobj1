document.querySelector('#login111').onclick = function () {
    window.location.href = "file:///D:/phpStudySetup/PHPTutorial/WWW/hwork/tuling/login.html"
}
document.querySelector('#register').onclick = function () {
    window.location.href = "file:///D:/phpStudySetup/PHPTutorial/WWW/hwork/tuling/register.html"
}
// le
let ajax = new Ajax();
ajax.hostname = 'http://localhost:81';
window.onload = function () {
    ajax.post('/book/getbooks').then(function (result) {
        let res = JSON.parse(result);
        let r=[];
        // 
        res.forEach(el => {
            if (el.readcount>5) {
                r.push(el);
            }
        });
        // 
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage
                , layer = layui.layer;
            laypage.render({
                elem: 'demo20'
                , count: r.length
                , jump: function (obj) {
                    //模拟渲染
                    obj.limit=15;
                    document.getElementById('leftall').innerHTML = function () {
                        var arr = []
                            , thisData = r.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                        layui.each(thisData, function (index, item) {
                            // arr.push('<li>' + item + '</li>');
                            arr.push(`<div class="left">
                            <div class="tupian">
                              <img src="${item.imgs}" alt="">
                            </div>
                            <div>
                              <span>${item.title}</span>
                            </div>
                            <div class="zuozhe">${item.author}</div>
                            <div>${item.translator} 译</div>
                          </div>`);
                        });
                        return arr.join('');
                    }();
                }
            });
        });
    }).catch(function (err) {
        console.log(err)
    });
    return false;
}
document.getElementById('tuijian').onclick=function () {
    document.getElementById('leftall').innerHTML='';
    document.getElementById('tuijian').style.border=1+`px solid black`;
    document.getElementById('tuijian').style.borderBottom=0;
    document.getElementById('remen').style.border=0;
    document.getElementById('remen').style.borderBottom=1+`px solid black`;
    document.getElementById('zuixing').style.border=0;
    document.getElementById('zuixing').style.borderBottom=1+`px solid black`;
    ajax.post('/book/getbooks').then(function (result) {
        let res = JSON.parse(result);
        let r=[];
        
        res.forEach(el => {
            if (el.recommend>5) {
                r.push(el);
            }
        });
        
        layui.use(['laypage', 'layer'], function () {
            let laypage = layui.laypage
                , layer = layui.layer;
            laypage.render({
                elem: 'demo20'
                , count: r.length
                , jump: function (obj) {
                    //模拟渲染
                    
                    obj.limit=15;
                    // obj.pages=1;
                    document.getElementById('leftall').innerHTML = function () {
                        let arr = []
                            , thisData = r.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                        layui.each(thisData, function (index, item) {
                            // arr.push('<li>' + item + '</li>');
                            arr.push(`<div class="left">
                            <div class="tupian">
                              <img src="${item.imgs}" alt="">
                            </div>
                            <div>
                              <span>${item.title}</span>
                            </div>
                            <div class="zuozhe">${item.author}</div>
                            <div>${item.translator} 译</div>
                          </div>`);
                        });
                        return arr.join('');
                    }();
                }
            });
        });
    }).catch(function (err) {
        console.log(err)
    });
    return false;
}
document.getElementById('remen').onclick=function () {
    document.getElementById('leftall').innerHTML='';
    document.getElementById('remen').style.border=1+`px solid black`;
    document.getElementById('remen').style.borderBottom=0;
    document.getElementById('tuijian').style.border=0;
    document.getElementById('tuijian').style.borderBottom=1+`px solid black`;
    document.getElementById('zuixing').style.border=0;
    document.getElementById('zuixing').style.borderBottom=1+`px solid black`;
    ajax.post('/book/getbooks').then(function (result) {
        let res = JSON.parse(result);
        let r=[];
        
        res.forEach(el => {
            if (el.readcount>5) {
                r.push(el);
            }
        });
        
        layui.use(['laypage', 'layer'], function () {
            let laypage = layui.laypage
                , layer = layui.layer;
            laypage.render({
                elem: 'demo20'
                , count: r.length
                , jump: function (obj) {
                    //模拟渲染
                    
                    obj.limit=15;
                    // obj.pages=1;
                    document.getElementById('leftall').innerHTML = function () {
                        let arr = []
                            , thisData = r.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                        layui.each(thisData, function (index, item) {
                            // arr.push('<li>' + item + '</li>');
                            arr.push(`<div class="left">
                            <div class="tupian">
                              <img src="${item.imgs}" alt="">
                            </div>
                            <div>
                              <span>${item.title}</span>
                            </div>
                            <div class="zuozhe">${item.author}</div>
                            <div>${item.translator} 译</div>
                          </div>`);
                        });
                        return arr.join('');
                    }();
                }
            });
        });
    }).catch(function (err) {
        console.log(err)
    });
    return false;
}
document.getElementById('zuixing').onclick=function () {
    document.getElementById('leftall').innerHTML='';
    document.getElementById('zuixing').style.border=1+`px solid black`;
    document.getElementById('zuixing').style.borderBottom=0;
    document.getElementById('tuijian').style.border=0;
    document.getElementById('tuijian').style.borderBottom=1+`px solid black`;
    document.getElementById('remen').style.border=0;
    document.getElementById('remen').style.borderBottom=1+`px solid black`;
    ajax.post('/book/getbooks').then(function (result) {
        let res = JSON.parse(result);
        let r=[];
        let now=new Date();
        
        res.forEach(el => {
            let lanow=new Date(el.addtimes)
            if (now.getTime()-lanow.getTime()<30*24*60*60*1000) {
                r.push(el);
            }
        });
        
        layui.use(['laypage', 'layer'], function () {
            let laypage = layui.laypage
                , layer = layui.layer;
            laypage.render({
                elem: 'demo20'
                , count: r.length
                , jump: function (obj) {
                    //模拟渲染
                    
                    obj.limit=15;
                    // obj.pages=1;
                    document.getElementById('leftall').innerHTML = function () {
                        let arr = []
                            , thisData = r.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                        layui.each(thisData, function (index, item) {
                            // arr.push('<li>' + item + '</li>');
                            arr.push(`<div class="left">
                            <div class="tupian">
                              <img src="${item.imgs}" alt="">
                            </div>
                            <div>
                              <span>${item.title}</span>
                            </div>
                            <div class="zuozhe">${item.author}</div>
                            <div>${item.translator} 译</div>
                          </div>`);
                        });
                        return arr.join('');
                    }();
                }
            });
        });
    }).catch(function (err) {
        console.log(err)
    });
    return false;
}