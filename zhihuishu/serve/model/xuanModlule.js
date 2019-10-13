//对数据进行操作  连接数据库（写个基类）
const DbBase = require('../base/Dbase');  //引入 基类
class UserModel extends DbBase {
    constructor() {
        super();
        this.table = "chooselesson";
    }

    creat(a, b, callback) {
        let sql = `DELETE FROM  ${this.table} where cid=${a};INSERT INTO  ${this.table}(cid,uid) VALUES (${a},${b})`;
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
    getCid(a,callback) {
        let sql = `SELECT * FROM  ${this.table} where uid=${a}`;
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
    deCid(a,callback) {
        let sql = `DELETE FROM  ${this.table} where cid=${a}`;
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