//继承数据库
const DBase = require('../base/Dbase');
class UserModel extends DBase {
    constructor(hostname = '') {
        super();
        this.table = 'user';
    };
    UserRegister(tel, passwd, head,name,callback) {
        let sql = `SELECT * FROM ${this.table} WHERE tel=${tel} LIMIT 1`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (results.length > 0) {
                callback({ code: -1, cmsg: "该手机号已被注册" });
            } else {
                let sql2 = `INSERT INTO ${this.table}(tel,passwd,head,name) VALUES ("${tel}","${passwd}","${head}","${name}")`;
                this.mydb.query(sql2, (err, results) => {
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else {
                        callback(results);
                    }

                });
            }
            this.mydb.end();
        });

    };
    //通过电话号码获取信息
    getDataByTel(tel, callback) {
        let sql = `SELECT * FROM ${this.table} WHERE tel=? LIMIT 1`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }

    //通过学号获取信息
    getDataBySno(tel, callback) {
        let sql = `SELECT * FROM ${this.table} WHERE tel=? LIMIT 1`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    //用户信息
    getUserNew(tel, callback) {
        let sql = `SELECT * FROM ${this.table} WHERE tel=? LIMIT 1`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    changeName(name,tel,callback) {
        let sql = `update ${this.table} set name='${name}' WHERE tel=${tel}`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    changeHead(head,tel,callback) {
        let sql = `update ${this.table} set head='${head}' WHERE tel=${tel}`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    changeEmail(email,tel,callback) {
        let sql = `update ${this.table} set email='${email}' WHERE tel=${tel}`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    changeTel(tel1,tel,callback) {
        let sql = `update ${this.table} set tel='${tel1}' WHERE tel=${tel}`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    changeSex(sex,tel,callback) {
        let sql = `update ${this.table} set sex='${sex}' WHERE tel=${tel}`;
        this.mydb.query(sql, [tel], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }
    changePasswd(passwd,tel,callback) {
        let sql = `update ${this.table} set passwd='${passwd}' WHERE tel=${tel}`;
        this.mydb.query(sql, [tel], (err, results) => {
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