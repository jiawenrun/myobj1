class Ajax{
    constructor(hostname=''){
        this.xhr=new XMLHttpRequest();
        this.hostname=hostname
    }
    get(url,data){
        let _this=this
        return new Promise(function(resolve,reject){
            let isFirst=true;
            let datastr=''
            for (const f in data) {
                if (data.hasOwnProperty(f)) {
                    datastr+=(isFirst?'':'&')+`${f}=${data[f]}`;
                    isFirst=false;
                }
            }
            _this.xhr.open('get',_this.hostname+url+datastr);
            _this.xhr.send();
            _this.xhr.onreadystatechange=function(){
                if(_this.xhr.readyState!=4) return ;
                if(_this.xhr.status==200){
                    resolve(_this.xhr.responseText);
                }else{
                    reject(_this.xhr.status)
                }
            }
        })
    }
    post(url,data){
        let _this=this
        return new Promise(function(resolve,reject){
            _this.xhr.open('post',_this.hostname+url);
            _this.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            let isFirst=true;
            let datastr=''
            for (const f in data) {
                if (data.hasOwnProperty(f)) {
                    datastr+=(isFirst?'':'&')+`${f}=${data[f]}`;
                    isFirst=false;
                }
            }
            _this.xhr.send(datastr);
            _this.xhr.onreadystatechange=function(){
                if(_this.xhr.readyState!=4) return ;
                if(_this.xhr.status==200){
                    resolve(_this.xhr.responseText);
                }else{
                    reject(_this.xhr.status)
                }
            }
        })
    }
}