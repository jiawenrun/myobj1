const dbase = require('../base/Dbase');
class banModlule extends dbase {
    constructor() {
        super();
        this.table = 'ban';
    }
    creatban(cateinfo, callback) {
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
    getbanname(bid,callback){
        let sql = `select * from ${this.table}  where bid=${bid}`;
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
module.exports = banModlule;