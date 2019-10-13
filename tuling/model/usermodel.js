const dbase = require('../base/dbase');
class usermodel extends dbase {
    constructor() {
        super();
        this.table = 'users';
    }
    registerUser(userinfo, callback) {
        let fieldstr ='', field = '';
        let data = [];
        let isFirst = true;
        for (const f in userinfo) {
            if (userinfo.hasOwnProperty(f)) {
                fieldstr += (isFirst ? '' : ',') + f;
                field += (isFirst ? '' : ',') + '?';
                data.push(userinfo[f]);
            } 
            isFirst = false;
        }
        let sql = `INSERT INTO ${this.table}(${fieldstr}) VALUES(${field})`;
        this.mydb.query(sql,data,(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }
    loginUser(username,callback){
        let sql = `SELECT * FROM ${this.table} WHERE username=? LIMIT 1`;
        this.mydb.query(sql,[username],(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }
    logUser(uid,callback){
        let sql = `SELECT * FROM ${this.table} WHERE uid=? LIMIT 1`;
        this.mydb.query(sql,[uid],(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }
}
module.exports = usermodel;