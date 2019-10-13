const mysql=require('mysql');
class dbase{
    constructor(){
        this.mydb=mysql.createConnection(require('./db'));
        this.mydb.connect();
    }
    end(){
        this.mydb.end();
    }
}
module.exports=dbase;