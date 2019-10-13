const dbase = require('../base/dbase');
class catemodel extends dbase {
    constructor() {
        super();
        this.table = 'category';
    }
    creatCate(cateinfo, callback) {
        let fieldstr ='', field = '';
        let data = [];
        let isFirst = true;
        for (const f in cateinfo) {
            if (cateinfo.hasOwnProperty(f)) {
                fieldstr += (isFirst ? '' : ',') + f;
                field += (isFirst ? '' : ',') + '?';
                data.push(cateinfo[f]);
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
    getfathercate(callback){
        let sql = `SELECT * FROM ${this.table} WHERE cid`;
        this.mydb.query(sql,(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }
    deltCate(cid,callback){
        let sql = `DELETE FROM ${this.table} WHERE cid=?`;
        this.mydb.query(sql,[cid],(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }
    getCid(callback){
        let sql = `SELECT * FROM ${this.table}`;
        this.mydb.query(sql,[cid],(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }
    getAllcate(page,limitnum,callback){
        let countsql=`SELECT COUNT(*) as nums FROM  ${this.table} WHERE 1;`
        let sql = `SELECT * FROM  ${this.table} WHERE 1 LIMIT ${(page-1)*limitnum}, ${limitnum}`;
        this.mydb.query(countsql+sql,(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }

    upcate(cateinfo, callback) {
        let sql='';
        for (let i in cateinfo) {
            if(i!="cid"){
            sql+=`UPDATE ${this.table} SET `+i+`=`+`'`+cateinfo[i]+`'`+` WHERE cid=`+cateinfo.cid+';'
        }}
        // console.log(sql)
        this.mydb.query(sql,(err,results)=>{
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
module.exports = catemodel;