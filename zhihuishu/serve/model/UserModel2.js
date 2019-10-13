//对数据进行操作  连接数据库（写个基类）
const DbBase=require('../base/Dbase');  //引入 基类
class UserModel extends DbBase{
   constructor(){
       super();
       this.table="mobilelearn"; 
   }

   getMobile(callback) {
    let sql = `SELECT * FROM  ${this.table}`;
    this.mydb.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            callback(results);
        }
        this.mydb.end();
    });
}

}

module.exports = UserModel;