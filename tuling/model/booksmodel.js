const dbase = require('../base/dbase');
class booksmodel extends dbase {
    constructor() {
        super();
        this.table = 'books';
    }
    getbookscid(cid,page ,limitnum,callback){
        let countsql=`SELECT COUNT(*) as nums FROM  ${this.table} WHERE cid=`+cid+`;`
        let sql = `SELECT * FROM  ${this.table} WHERE cid=`+cid+` LIMIT ${(page-1)*limitnum}, ${limitnum}`;
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
    deltBookCate(bid,callback){
        let sql = `DELETE FROM ${this.table} WHERE bid=?`;
        this.mydb.query(sql,[bid],(err,results)=>{
            if(err){
                console.log(err);
                callback(err);
            }else{
                callback(results);  

            }
            this.mydb.end();
        })
    }

    creatBook(cateinfo, callback) {
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
    updata(cateinfo, callback) {
        let sql='';
        for (let i in cateinfo) {
            if(i!="bid"){
            sql+=`UPDATE ${this.table} SET `+i+`=`+`'`+cateinfo[i]+`'`+` WHERE bid=`+cateinfo.bid+';'
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
    getBooks(callback) {
        let sql = `SELECT * FROM  ${this.table}`;
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
module.exports = booksmodel;